import React, { Component } from 'react'
import axios from 'axios'

class Display extends Component {

    state = {
        quotes:[]
    }

    componentWillMount() {
        axios.get('https://type.fit/api/quotes')
            .then(res => {
                    let quotesObj = res.data[Math.floor(Math.random() * res.data.length)]
                    let singleArrQuotes = []
                    singleArrQuotes.push(quotesObj)

                    this.setState({
                        quotes:singleArrQuotes
                    })
            })
    }

    render() {
        let mQuotes = this.state.quotes.map((quote,key)=>{
            if(quote.author === null ){
                return(
                    <div key={key}>
                        <h2> { quote.text } </h2>
                        <h3 style={{textAlign:'right'}}> ~ Random </h3>
                    </div>
                )
            }else{
                return(
                    <div key={key}>
                        <h2> { quote.text } </h2>
                        <h3 style={{textAlign:'right'}}> ~ {quote.author} </h3>
                    </div>
                )
            }
        })

        return (
            <div>
                <div>
                    {mQuotes}
                </div>
            </div>
        )
    }
}

export default Display;