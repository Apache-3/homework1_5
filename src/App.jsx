import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { Posts } from './pages/Posts'
import { CreatePosts } from './pages/CreatePosts'
import { Error } from './pages/Error'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='posts' element={<Posts />} />
          <Route path='create-posts' element={<CreatePosts />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
