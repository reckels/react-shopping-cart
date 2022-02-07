import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';
import ItemPage from './ItemPage';
import {items} from './static-data';
import CartPage from './CartPage';

const summarizeCart = (cart) => {
  const groupItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {...item, count: 0}
    summary[item.id].count++;
    return summary;
    },
  {});
  return Object.values(groupItems);
};

const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {setCart(cart => [...cart, item]);};
  const removeItem = (item) => {let index = cart.findIndex(i => i.id === item.id); 
    if (index >= 0) {
      setCart(cart => {const copy = [...cart]; 
        copy.splice(index,1);
        return copy;
      });
    }
  }
  return (  
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab}/>
      <main className="App-content">
        <Content tab={activeTab} onAddToCart={addToCart} cart={summarizeCart(cart)} onRemoveItem={removeItem}/>
      </main>
    </div>
  )
}

const Content = ({tab, onAddToCart, cart, onRemoveItem}) => {
  switch(tab){
    case 'items':
      return <ItemPage items={items} onAddToCart={onAddToCart}/>;
    case 'cart':
      return <CartPage items={cart} onAddOne={onAddToCart} onRemoveOne={onRemoveItem}/>;
    default: break;
  }
}

export default App;
