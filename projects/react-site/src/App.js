import React, { Component} from 'react'
import NavBar from './Components/NavBar.js'
import Home from './Components/Home.js'
// import ResultPage from './Components/ResultPage.js'
import About from './Components/About.js'
import { Switch, Route, withRouter } from 'react-router-dom'
import './style.css'
import { withBrews } from './Context/BrewsProvider.js'



class App extends Component {
    constructor (){
        super()
        // this.state = {
        //   name:"",
        //   city: "",
        //   state: "",
        //   website_url:""
        
        // }
    }

    componentDidMount() {
        this.props.getBrews()
    }




    
    render () {
        console.log(this.props)
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





export default withBrews(withRouter(App))