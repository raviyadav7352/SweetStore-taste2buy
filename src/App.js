import React,{Fragment, useState} from "react";
import Header from "./components/header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/store/CartProvider";
import Cart from "./components/UI/Cart";

 function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const showModal =() =>{
    setModalVisible(true)
  }
  const hideModal = ()=>{
    setModalVisible(false)
  }
  return (
      <CartProvider>
      {modalVisible && <Cart onHideCart={hideModal}></Cart>}
      <Header onShowCart ={showModal}/>
      <main>
        <Meals/>
      </main>
      </CartProvider>
    
  );
}

export default App;
