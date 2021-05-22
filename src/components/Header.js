
import '../App.css';
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

function Header(inputValue,onSearchItems) {



    return (
        <>
            <header className={'header'}>
                <input className="search"
                       onChange={onSearchItems}
                       value={inputValue}
                       type="text"/>
            </header>

        </>
    );
}

export default Header;






