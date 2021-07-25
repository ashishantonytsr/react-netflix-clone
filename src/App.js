import { originals, action, kids } from './urls';
import NavBar from "./Components/NavBar/NavBar";
import Banner from './Components/Banner/Banner';
import PostsRow from './Components/PostsRow/PostsRow';
import './App.css'

function App() {
  return (
    <div className="App">
			<NavBar />
			<Banner />
			<PostsRow title='Netflix Orginals' url={originals}/>
			<PostsRow title='Action' url={action} isSmall/>
			<PostsRow title='Kids' url={kids} isSmall/>
    </div>
  );
}

export default App;
