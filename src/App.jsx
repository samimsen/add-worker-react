import { useEffect, useState } from 'react'
import AddWorker from './Workers/AddWorker'
import WorkerList from './Workers/WorkerList'

function App() {

  const [workers, setWorkers] = useState(localStorage.getItem("workers") ? JSON.parse(localStorage.getItem("workers")): [])

  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers))
  }, [workers])

  return (
    <>
      <h1 className='text-white text-center mt-6 text-3xl'>Maaş Otomasyonu</h1>
      <AddWorker workers={workers} setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </>
  )
}

export default App
