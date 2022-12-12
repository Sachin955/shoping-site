import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Main from './components/main'
import About from './components/about'
import Contact from './components/contact'
import NoPage from './components/nopage';
import Cart from './components/cart';
import data from './components/data'
import Slider from './components/slider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartMessage, setCartMessage] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const { products } = data
console.log(cartCount,"app")
  useEffect(() => {
    setTimeout(() => {
      setCartMessage(false)
    }, 3000)
  })

  const onSelect = (product, index) => {
    const productExist = cartItems.find(x => x.id === product.id);
    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...productExist, qty: productExist.qty + 1 } : item)
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
    setCartMessage(true)
    setCartCount(cartCount + 1)
   

  }
  const onRemove = (product) => {
    // const itemExist = cartItems.find((x) => x.id === product.id)
    // if (itemExist.qty===1) {
    //   setCartItems(cartItems.filter(x => x.id !== product.id))
    // } else {
    //   setCartItems(cartItems.map((x) => x.id === product.id ?
    //     { ...itemExist, qty: itemExist.qty - 1 } : x)
    //   );
    // }
    // // setcartCount(cartCount === 0)
    setCartItems(cartItems.filter(x => x.id !== product.id))
    
    

  }

  const decreaseItems = (product) => {
   const itemExist = cartItems.find((x) => x.id === product.id)
    if (itemExist.qty===1) {
      setCartItems(cartItems.filter(x => x.id !== product.id))
    } else {
      setCartItems(cartItems.map((x) => x.id === product.id ?
        { ...itemExist, qty: itemExist.qty - 1 } : x)
      );
    setCartCount(cartCount-1)
    if(console.log(cartItems=='1')){
      
    }
    
  }
}

  return (
    <div className="App">
      <BrowserRouter>
        <Header cartCount={cartCount} />
        
        <Routes>
          <Route path='/' element={<Slider />} />
          <Route path='/home' element={<Main data={products} onSelect={onSelect} cartMessage={cartMessage} />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/cart' element={<Cart cartItem={cartItems}
            onSelect={onSelect}
            onRemove={onRemove}
            decreaseItems={decreaseItems}
            cartCount={cartCount}
            // totalAmount={totalAmount}
          />}
          />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>


    </div>
  );

}
export default App;
