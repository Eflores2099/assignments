import React, { Component } from 'react'
import { withBrews } from '../Context/BrewsProvider'


class ResultPage extends Component {
    
    
        render() {
            const { name, city, state, website_url} = this.props.breweriesArr[0]
            // console.log(this.props)
            console.log(this.props.breweriesArr[0])
            return (
                <div className = "result-page">
                    
                    <h1>{this.props.breweriesArr[0].name}</h1>
                    <h3>{city}</h3>
                    <h3>{state}</h3>
                    <a href= {website_url}>{website_url}</a>

                </div>
            )
        }
    }


export default withBrews(ResultPage)