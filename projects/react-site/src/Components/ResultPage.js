import React, { Component } from 'react'
import { withBrews } from '../Context/BrewsProvider'


class ResultPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            city:props.city,
            state: props.state,
            website_url: props.website_url
        }
    }
        render() {
            const { name, city, state, website_url, _id } = this.props
            return (
                <div>
                    <h1>This</h1>
                    <h1>{name}</h1>
                    <p>{city}</p>
                    <p>{state}</p>
                    <p>{website_url}</p>

                </div>
            )
        }
    }


export default withBrews(ResultPage)