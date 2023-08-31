import { useState } from 'react'
import AddWorker from './Workers/AddWorker'
import WorkerList from './Workers/WorkerList'

function App() {
  
  const [workers, setWorkers] = useState([])

  return (
    <>
      <h1 className='text-white text-center mt-6 text-3xl'>Maaş Otomasyonu</h1>
      <AddWorker workers={workers} setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </>
  )
}

export default App
