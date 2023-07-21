import * as React from 'react'
import Table from '../components/Table'
import { Train } from '@/lib/types'

function App() {
  const [trains, setTrains] = React.useState<Train[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchTrains = async () => {
      const response = await fetch('http://localhost:3002/')
      const data = await response.json()
      setTrains(data)
      setLoading(false)
    }
    fetchTrains()
  }, [])

  if (loading) {
    return (
      <main className="bg-gray-200 min-h-screen">
        <div className='flex justify-center items-center'>
          <h1 className="text-4xl text-black font-bold text-center">Loading...</h1>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-gray-200 min-h-screen">
      <section className="container mx-auto max-w-7xl p-4">
        <h1 className="text-4xl text-black font-bold text-center">ALL TRAINS</h1>
        <div className="mt-8 md:mt-12 w-full overflow-x-auto overflow-hidden">
          <Table trains={trains} />
        </div>
      </section>
    </main>
  )
}

export default App
