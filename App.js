import logo from './logo.svg';
import './App.css';
import ProductAccept from './Product/ProductAccept.jsx';
import UserProfile from './profileCard/UserProfile.jsx';
import TodoArr from './TodoList/Todoarr.jsx';
import Article from './ArticleList/Article.jsx';
import Event from './EventScedule/Events.jsx';
import TodoList from './assignment_nine/TodoLists.jsx';

function App() {

  return (
    <div className='App'>
      <TodoList/>
    </div>
    
      // <div className="App">
      //   <div>

      //   <ProductAccept/>
      //   </div>
      //   <div>
      //     <UserProfile />
      //   </div>
        
      //   <div>
      //       <TodoArr/>
      //   </div>
      //   <div>
      //     <Article/>
      //   </div>
      //   <div>
      //     <Event/>
      //   </div>
      // </div>
  );
}

export default App;
