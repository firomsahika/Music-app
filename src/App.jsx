
import HomePage from './pages/HomePage'
import GlobalStyle from './styles/Global.styled'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Album from './pages/Album'
import CreateSong from './pages/CreateSong'
import SongDetail from './pages/SongDetail'
import SideBar from './components/SideBar'
import Header from './components/Header'
import UpdateSong from './pages/UpdateSong';
import Favorite from './pages/Favorite'


function App() {
  return (
    <BrowserRouter>
      <div>
        <GlobalStyle />
        <Header />
        <SideBar />
          <Routes>
            {/* <Route exact path='/' Component={LoginPage}/> */}
            <Route  path='/' Component={HomePage} />
            <Route path='/album' Component={Album}/>
            <Route path='/createsong' Component={CreateSong}/>
            <Route path='/favorite' Component={Favorite}/>
            <Route path='/song/:id' Component={SongDetail}/>
            <Route path="/update-song/:id" Component={UpdateSong}/>
            <Route path='/movie/:id' 
            />
          </Routes>
        
        </div>
       </BrowserRouter>
   
  )
}

export default App
