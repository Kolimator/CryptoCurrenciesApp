import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import index from  "./index.css"
import List from "./components/list/List"
import {BrowserRouter, Route ,Switch} from "react-router-dom"
import NotFound from "./components/NotFound"
import Detail from "./components/common/Detail"


const App = () => {

  
  return (
    <BrowserRouter>
        <div>
        <Header/>
        <Switch>
           <Route path="/" component={List} exact/>
            <Route path="/currency/:id" component={Detail} exact/>
            <Route component={NotFound}/>
        </Switch>
        </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
