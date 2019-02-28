import React from'react'
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
        hitList: []
        }
    }

componentDidMount(){
    axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(response =>{
        this.setState({
            hitList: response.data.results
        })
}

}

}

