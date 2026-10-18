import React, { useState } from 'react'
import useStore from './storeexptrck'

const ExpenseTracker = () => {
  const { expenses, addExpense, removeExpense } = useStore()
  const [description, setDescription] = useState<string>("")
  const [amount, setAmount] = useState<number | "">("")

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault()
    if (description.trim() === "" || amount === "") return

    addExpense({
      id: Date.now(),
      description: description.trim(),
      amount: Number(amount),
    })

    setDescription("")
    setAmount("")
  }

  const totalSpent = expenses.reduce((total, expense) => total + expense.amount, 0)
  const transactionCount = expenses.length
  const averageSpent = transactionCount > 0 ? totalSpent / transactionCount : 0

  return (
    <div className="app-container">
      <header className="header">
        <h1>Expense Tracker</h1>
        <p>Manage your transactions and track your spending with Zustand</p>
      </header>

      {/* Dashboard Stats */}
      <section className="stats-grid">
        <div className="stat-card total">
          <div className="stat-label">Total Spent</div>
          <div className="stat-value">${totalSpent.toFixed(2)}</div>
        </div>
        <div className="stat-card count">
          <div className="stat-label">Transactions</div>
          <div className="stat-value">{transactionCount}</div>
        </div>
        <div className="stat-card average">
          <div className="stat-label">Average Spent</div>
          <div className="stat-value">${averageSpent.toFixed(2)}</div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="main-grid">
        {/* Form Section */}
        <section>
          <h2 className="section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
            Add Transaction
          </h2>
          <form onSubmit={handleAddExpense} className="expense-form">
            <div className="form-group">
              <label htmlFor="desc-input" className="form-label">Description</label>
              <input
                id="desc-input"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Expense Description"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="amount-input" className="form-label">Amount ($)</label>
              <input
                id="amount-input"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="0.00"
                min="0.01"
                step="0.01"
                className="form-input"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Add Expense
            </button>
          </form>
        </section>

        {/* History List Section */}
        <section className="expense-list-container">
          <h2 className="section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M3 20h.01M3 16h.01M3 12h.01M3 8h.01M3 4h.01M7 16h14M7 12h14M7 8h14M7 4h14"/></svg>
            History
          </h2>
          {expenses.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">💸</div>
              <p>No transactions yet. Start by adding one!</p>
            </div>
          ) : (
            <ul className="expense-list">
              {expenses.map((expense) => (
                <li key={expense.id} className="expense-item">
                  <div className="expense-info">
                    <span className="expense-desc">{expense.description}</span>
                    <span className="expense-date">
                      {new Date(expense.id).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  <div className="expense-actions">
                    <span className="expense-amt">${expense.amount.toFixed(2)}</span>
                    <button
                      onClick={() => removeExpense(expense.id)}
                      className="delete-btn"
                      aria-label={`Delete ${expense.description}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6"/></svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}

export default ExpenseTracker
