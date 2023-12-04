
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Upload from './pages/upload/Upload';
import './App.scss';


function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>
          
          <Route 
            path="/" 
            element={
              <Home/>
            }        
          />

          <Route
            path="/:imageId"
            element={
              <Home/>
            }
          />

          <Route
            path='/upload'
            element={
              <Upload/>
            }
          />

        </Routes>   

      </BrowserRouter>

    </>

  )

}

export default App
