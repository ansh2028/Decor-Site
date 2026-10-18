// import Header from "./components/header.jsx"
// import Main from "./components/Main.jsx"
// import Footer from "./components/footer.jsx"
// import Validpassword from "./components/validpassword.jsx"
// import Stylecard from "./components/stylecard.jsx"
// import { useState } from "react"
// import Todolist from "./components/Todolist.jsx"
// // import Useeffect from "./components/Useeffect.jsx"
// import Usecontext from "./components/usecontext.jsx"
// import Usecontxt2 from "./components/usecontxt2.jsx"
// import Focousandwrite from "./components/Focousandwrite.jsx"
// import Conter from "./components/conter.jsx"
// // import Meals from "./components/meals"
// import Calculator from "./components/calculator"
// import Srchbar from "./components/srchbar"
// import Testimonials from "./components/testimonials"
// import Toggglebtn from "./components/toggglebtn"

// import Form from "./components/form"
import Card from "./components/shoesite/components/card"
import Navigation from "./components/shoesite/navigation/nav"
import Product from "./components/shoesite/products/product"
import Recomended from "./components/shoesite/recomended/Recomended"
import Sidebar from "./components/shoesite/sidebar/Sidebar"

// const Button = () => {
//   return <button onClick={() => alert("Button clicked!")}>click me</button>
// }




import { useState } from "react";
import products from './components/shoesite/db/data.jsx';

const App = () => {


  // shoe site 





  // for shoesite 

  // database 

  const [selectedCategory, setSelectedCategory] = useState(null);

  // input filter 
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase())!==-1)

  const handleChange=event=>{
    setSelectedCategory(event.target.value)
  }

  const handleClick=event=>{
    setSelectedCategory(event.target.value)
  }

  function filteredData(products,selected,query){
    let filteredProducts=products

    if(query){
      filteredProducts= filteredItems
    }

    if(selected){
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === selected || color === selected || company === selected || newPrice === selected || title === selected);
    }
    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
    <Card 
      key={Math.random()} 
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
    />
    ))
    
  }

const result = filteredData(products,selectedCategory,query)

  return (
    <div>
      {/* <Header />
      <Main />
      <Footer /> */}
      {/* <Validpassword /> */}
      {/* <Stylecard /> */}
      {/* <Button /> */}
      {/* <p>{count}</p>
      <button onClick={increment}>increment</button> */}
      {/* <Todolist /> */}
      {/* <Useeffect /> */}
      {/* <Usecontext />
        <Usecontxt2 /> */}
      {/* <Focousandwrite /> */}
      {/* <Conter /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <Toggglebtn /> */}
      {/* <Srchbar /> */}
      {/* <Testimonials /> */}
      {/* <Form /> */}




















      <Sidebar handleChange={handleChange} />
      <Navigation handleInputChange={handleInputChange} query={query} />
      <Recomended handleClick={handleClick} />
      <Product result={result}/>


    </div>
  )
}

export default App