import { useState } from 'react';
import './App.css';
import Post from './components/Post';
import Sidebar from './components/Sidebar';


function App() {

  const [post] = useState({
    title: 'Deus é amor',
    content: 'Jesus é o caminho'
  })

  return (
    <div className="App">
      <header className="App-header">
       <Sidebar post={post}/>
       <Post post={post} totalComments={10} />
      </header>
    </div>
  );
}

export default App;