import Banner from './Banner';
import '../styles/App.css';
import '../styles/Layout.css'
import './ShoppingList';
import ShoppingList from './ShoppingList';
// import QuestionForm from './QuestionForm';
import Footer from './Footer';
import Cart from './Cart';
import { useEffect, useState } from 'react';


function App() {
  const savedCart = localStorage.getItem('cart')
  // fonction de State, cart = état et updateCart = modification
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
  }, [cart])
  
  // Fonction créer pour cacher le Footer avec le bouton cacher
  const [isFooterShown, updateIsFooterShown] = useState()

  return (
  <div>
    <Banner />
    <div className="lmj-layout-inner" >
      {/* On peut ainsi envoyer en props l'info et la modification en temps réel */}
      <Cart cart={cart} updateCart={updateCart} />
      <ShoppingList cart={cart} updateCart={updateCart} />
      {/* <QuestionForm /> */}
    </div>
    
    <button onClick={() => updateIsFooterShown(!isFooterShown)}>Cacher !</button>
      {isFooterShown && <Footer cart={cart} />}
  </div>
  )
}

export default App;
