import '../../App.css';

function MainContent({ arrayBlock }) {

    return(
    <main className="main">
        {   arrayBlock.map((item)=>(
            <div className="shop-items" key={item.nameItem}>
                <p className="shop-title">{item.model}</p>
                <p className="shop-title">{item.nameItem}</p>
            </div>
        ))
        }
    </main>
    )

}

export default MainContent;