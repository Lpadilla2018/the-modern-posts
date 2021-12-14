import './App.scss';
import { Route, Routes , useParams} from 'react-router-dom';

// Pages
import HomePage from './pages/homepage/homepage.component';
import PostDetails from './pages/post-details/post-details.component';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/the-modern-posts' element={<HomePage />}></Route>
        <Route path='/the-modern-posts/post/:postId' element={<GetPostDetails/>}></Route>
      </Routes>
    </div>
  );
}

function GetPostDetails() {
  let { postId } = useParams();
  return <PostDetails postId={postId}/>;
}

export default App;
