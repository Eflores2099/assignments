import React, { Component } from 'react'
import axios from 'axios'

class GetBrews extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    getBrews = () => {
        axios.get("https://api.openbrewerydb.org/breweries").then(response =>{
            this.setState({
                
            })
        })
    }
}