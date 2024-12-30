import { useState } from 'react'

import './App.css'
import GroceryCart from './componant/GroceryCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   

<div style={{
  backgroundColor: "#f5f5f5", 
  marginTop: "5em",
  display: "flex",
  border: "1px solid #ddd",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px", 
  padding: "20px", 
  justifyContent: "center", 
  alignItems: "center", 
}}>
    <GroceryCart />
    </div>

    </>
  )
}

export default App
