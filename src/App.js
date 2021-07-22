import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import Banner from './Components/Banner/Banner';
import PostsRow from './Components/PostsRow/PostsRow';

function App() {
  return (
    <div className="App">
			<NavBar />
			<Banner />
			<PostsRow />
    </div>
  );
}

export default App;
