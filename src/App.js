import React,{Fragment, useState} from "react";
import Header from "./components/header/Header";
import Meals from "./components/Meals/Meals";
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
    <Fragment>
      {modalVisible && <Cart onHideCart={hideModal}></Cart>}
      <Header onShowCart ={showModal}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
    
  );
}

export default App;
