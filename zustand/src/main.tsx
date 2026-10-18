import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// import App from './App.tsx'
// import './index.css'
import Tanstackquey from './tanstackquey.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <App /> */}
      {/* <ExpenseTracker /> */}
      <Tanstackquey />
    </QueryClientProvider>
  </StrictMode>,
)
