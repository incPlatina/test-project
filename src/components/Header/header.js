import '../../App.css';

function Header({ onChangeValueUser, inputValueSearch }) {

    const changeUserValue = (e) => {
        const { value } = e.target;
        onChangeValueUser(value);
    }

    return (

            <header className="header">
                <input
                    type="text"
                    className="search"
                    onChange={changeUserValue}
                    value={inputValueSearch}
                    />
            </header>
    )
}

export default Header;