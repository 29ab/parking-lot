import React,{Component} from 'react';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter , Route} from 'react-router-dom';

function App() {
  return (
  
  <BrowserRouter>
  <div className="App">
  	<Route  exact path='/'  component={TodoList} />
  	<Route path='/list' component={TodoList} />
  	</div>
  </BrowserRouter>
  	
  	
  );
}

export default App;
