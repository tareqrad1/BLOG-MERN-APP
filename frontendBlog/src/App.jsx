import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Protofillo from './pages/Protofillo';
import CreatePost from './pages/CreatePost';
import Footer from './components/footer';
import { SimpleRegistrationForm } from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='*' element={<h1>Page Not Found !</h1>} />
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/protofillo' element={<Protofillo />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/login' element={<SimpleRegistrationForm />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App