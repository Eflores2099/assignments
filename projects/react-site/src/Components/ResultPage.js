import React, { Component } from 'react'
import { withBrews } from '../Context/BrewsProvider'


class ResultPage extends Component {
    
    
        render() {
            const { name, city, state, website_url, _id } = this.props.breweriesArr[0]
            console.log(this.props)
            return (
                <div>
                    
                    <h1>{name}</h1>
                    <p>{city}</p>
                    <p>{state}</p>
                    <a href= {website_url}>{website_url}</a>

                </div>
            )
        }
    }


export default withBrews(ResultPage)