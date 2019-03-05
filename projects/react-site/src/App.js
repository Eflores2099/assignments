import React, { Component} from 'react'
import NavBar from './Components/NavBar.js'
import Home from './Components/Home.js'
// import ResultPage from './Components/ResultPage.js'
import About from './Components/About.js'
import { Switch, Route, withRouter } from 'react-router-dom'
import './style.css'



class App extends Component {
    constructor (){
        super()
        this.state = {
          name:"",
          city: "",
          state: "",
          website_url:""
        
        }
    }

    componentDidMount() {
        this.props.
    }




   
    render () {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path = "/" component = {Home}/>
                    <Route path = "/about" component = {About}/>
                </Switch>
            </div>
            )
        }  
    
}





export default withRouter (App)