import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { BrowserRouter } from 'react-router-dom'


function App() {
 

  return (
    <div className='h-screen pt-14'>
      <BrowserRouter>
        <Header />
        <Content />  
      </BrowserRouter>  
    </div>

    
  )
}

export default App
