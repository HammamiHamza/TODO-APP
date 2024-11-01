
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from'react-router-dom';
import Home from './components/Home';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import ApiComponent from './components/ApiComponent';
function App() {
return (
<Router>
<div>
<nav>
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/todos">Todo List</Link>
</li>
<li>
<Link to="/counter">Counter</Link>
</li>
<li>
<Link to="/api">ApiComponent</Link>
</li>
</ul>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/todos" element={<TodoList />} />
<Route path="/api" element={<ApiComponent />} />

<Route path="/counter" element={<Counter />} />


</Routes>
</div>
</Router>
);
}
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
