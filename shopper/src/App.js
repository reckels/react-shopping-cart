import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';


const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  return (  
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab}/>
      <main className="App-content">
        <Content tab={activeTab}/>
      </main>
    </div>
  )
}

const Content = ({tab}) => {
  switch(tab){
    case 'items':
      return <span>the items</span>;
    case 'cart':
      return <span>the cart</span>;
    default: break;
  }
}

export default App;
