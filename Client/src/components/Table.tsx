import React from 'react'
import { useRouter } from 'next/router';
import { Train } from '@/lib/types';

const columns = [
    'Train Name',
    'Train No.',
    'Departure Time',
    'Seats Available',
    'Price',
]

const Table = ({ trains }: { trains: Train[] }) => {
    const router = useRouter();

    return (
        <table className='min-w-full border-2'>
            <thead className='border-b-2 bg-white'>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column}
                            scope='col'
                            className='px-6 py-2 text-left text-sm font-semibold text-gray-900'
                        >
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className='divide-y bg-white divide-gray-200'>
                {trains.map((train: any, idx: number) => (
                    <tr key={idx} onClick={() => router.push(`/train/${train.trainNumber}`)} className={`${idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                        } cursor-pointer border-b hover:bg-blue-200`}>
                        <td className='whitespace-nowrap px-6 py-1 text-sm font-medium text-gray-900'>
                            {train.trainName}
                        </td>
                        <td className='whitespace-nowrap px-6 py-1 text-sm font-medium text-gray-900'>
                            {train.trainNumber}
                        </td>
                        <td className='whitespace-nowrap px-6 py-1 text-sm font-medium text-gray-900'>
                            {train.trainNumber}
                        </td>
                        <td className='whitespace-nowrap px-6 py-1 text-sm font-medium text-gray-900'>
                            <div className=" flex flex-col gap-2">
                                <p>
                                    Sleeper: {train.seatsAvailable.sleeper}
                                </p>
                                <p>
                                    AC: {train.seatsAvailable.AC}
                                </p>
                            </div>
                        </td>
                        <td className='whitespace-nowrap flex flex-col gap-4 px-6 py-1 text-sm font-medium text-gray-900'>
                            <div className=" flex flex-col gap-2">
                                <p>
                                    Sleeper: {train.price.sleeper}
                                </p>
                                <p>
                                    AC: {train.price.AC}
                                </p>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table