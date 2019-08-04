import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js'
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'; 

class App extends React.Component {
client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})    
    render (){
        return (
            <ApolloProvider client = {this.client}>
               <BrowserRouter>
                <Routes/>
                </BrowserRouter>
            </ApolloProvider>
        )
    }
}


ReactDOM.render (<App/>, document.querySelector ('#root'))