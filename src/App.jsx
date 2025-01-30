import { useState } from 'react'
import FileDisplay from './Components/FileDisplay'
import Header from './Components/Header'
import HomePage from './Components/HomePage'


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudiAvailable = file || audioStream

  function handleAudioReset()
  {
    setFile(null)
    setAudioStream(null)
  }

  return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />

        {isAudiAvailable ? (

          <FileDisplay handleAudioReset={handleAudioReset} file={file} audioStream={audioStream}/>

        ) : ( 

        <HomePage setFile={setFile} setAudioStream={setAudioStream} /> 

        )}

      </section>

      <footer>

      </footer>
    </div>
  )
}

export default App
