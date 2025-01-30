import { useState } from 'react'
import Header from './Components/Header'
import HomePage from './Components/HomePage'


function App() {

  return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />

        <HomePage />
      </section>

      <footer>

      </footer>
    </div>
  )
}

export default App
