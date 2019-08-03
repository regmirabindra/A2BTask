import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js'
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component {
    
    render (){
        return (
            <div>
               <BrowserRouter>
              
                <Routes/>
                </BrowserRouter>
            </div>
        )
    }
}


ReactDOM.render (<App/>, document.querySelector ('#root'))