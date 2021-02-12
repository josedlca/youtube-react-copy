import React from 'react'

function Header(props){
    return(
        <header className="header">
            <div className="header__container">
                <input 
                    type="text"
                    value={props.searchInput}
                    name="searchInput"
                    placeholder="Buscar"
                    onChange={props.handleChangeInput}
                    className="header__inputText"
                />
                <button 
                    onClick={props.handleClick}
                    className="header__btn"
                >
                    <i className="fas fa-search"></i>
                </button>
            </div>
      </header>
    )
}

export default Header