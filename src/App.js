
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import { TodoInput } from './components/TodoInput';
import { Todo } from './components/Todo';
import { Detail } from './components/Detail';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' element={<TodoInput />} />
        <Route path="/list" element={<Todo />} />
        <Route path="/list/id" element={<Detail />} />
      </Router>
      {/* <TodoInput />
      <Todo /> */}
    </div>
  );
}

export default App;
