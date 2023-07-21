import { Train } from '@/lib/types'
import { useRouter } from 'next/router'
import * as React from 'react'

function App() {
    const router = useRouter()
    const { id } = router.query
    const [train, setTrain] = React.useState<Train>()
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchTrains = async () => {
            const response = await fetch(`http://localhost:5000/train/${id}`)
            const data = await response.json()
            setTrain(data)
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
                <h1 className="text-4xl text-black font-bold text-center">TRAIN</h1>
                {train ? (
                    <div className="mt-10 flex flex-col gap-4">
                        <p>Train Name: {train.trainName}</p>
                        <p>Train Number: {train.trainNumber}</p>
                        {/* <p>Departure Time: {train.departureTime}</p> */}
                        <div>
                            Seats Available:
                            <div className=" flex flex-col gap-2">
                                <p>
                                    Sleeper: {train.seatsAvailable.sleeper}
                                </p>
                                <p>
                                    AC: {train.seatsAvailable.AC}
                                </p>
                            </div>
                        </div>
                        <div>
                            Price:
                            <div className=" flex flex-col gap-2">
                                <p>
                                    Sleeper: {train.price.sleeper}
                                </p>
                                <p>
                                    AC: {train.price.AC}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Train not found</p>
                )}

            </section>
        </main>
    )
}

export default App
