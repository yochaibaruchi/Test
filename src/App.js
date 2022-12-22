import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UsersComponent from "./components/UsersComponent";
import PostComponent from './components/PostsComponent'
import "./App.css";
import Comments from "./components/Comments";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UsersComponent />} />
          <Route path="/Posts" element={<PostComponent />} />
          <Route path="/Comments/:id" element={<Comments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
