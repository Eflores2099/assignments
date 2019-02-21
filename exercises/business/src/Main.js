import React from 'react'
// import gastroImg from './gastro.jpg'


function Main(){
    return(
        <div>
            
            <div className ="header">
            <h1>Oakenshield's English Pub</h1>
                <h3>Serving The Seattle Metro Area Since 1953</h3>
            </div>    
            
    
            <div className = "menu">
                <ul>Gastro Pub Burger</ul>
                <div className = "gastro"></div>
                <ul>Pub Chicken Curry</ul>
                <div className = "curry"></div>
                <ul>Banger's and Mash</ul>
                <div className = "bangers"></div>
            </div>

        </div>
    
    )

}
export default Main