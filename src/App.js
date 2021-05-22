import React , { useState, useEffect } from'react';
import './App.css';
import Header from './components/Header/header'
import MainContent from "./components/Main/Main";

const array=[
    {
        name:"Кросовки",
        price:"10000р",
        brand:"Nike"
    },
    {
        name:"Кросовки 1",
        price:"1000р",
        brand:"Nike"
    },
    {
        name:"Кросовки 2",
        price:"100р",
        brand:"Nike"
    },
    {
        name:"Кросовки 3",
        price:"100000р",
        brand:"Nike"
    },
    {
        name:"Кросовки 4",
        price:"100500р",
        brand:"Nike"
    },
    {
        name:"Кросовки 5",
        price:"1999р",
        brand:"Nike"
    },
];

function App() {
    const[inputValue,setInputValue]=useState('');
    const[goodItems,setGoods]=useState([]);
    const onSearchItems=(e)=>{
        const {value} = e.target;
        setInputValue(value);
        const newItems = array.filter(( item)=>{
            return item.name.toLowerCase().includes(value.toLowerCase())
        })
            setGoods(newItems);
        console.log(newItems);
    }
    ;
    useEffect(()=>{

        setGoods(array);
    },[]);



    return (
    <div className="App">
        <Header
            inputValue={inputValue}
            onSearchItems={onSearchItems}
            />


        <main className="main-wrapper">
            {
                goodItems.map((item)=>(
                    <div className="item-block">
                        <p>{item.name}</p>
                        <p>{item.brand}</p>
                        <p>{item.price}</p>
                    </div>
                ))
            }

        </main>
        {array.length===0 &&
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>



        </div>
        }
    </div>
  );
}

export default App;






