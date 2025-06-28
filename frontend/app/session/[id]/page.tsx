'use client'

import React, { useState, useEffect } from 'react'
import { Driver } from '@/types/openf1'
import DriverTable from '@/components/drivers/TableDrivers';

type Props = {
  params: Promise<{ id: string }>;
};

export default function SessionPage({ params }: Props) {
  const unwrappedParams = React.use(params);
  const id = unwrappedParams.id;
  //const [laps, setLaps] = useState<Session[] | null>(null)
  const [drivers, setDrivers] = useState<Driver[]>([])

  useEffect(() => {
    // const fetchLaps = async () => {
    //   try {
    //     const response = await fetch(`https://api.openf1.org/v1/laps?session_key=${id}`)
    //     if (!response.ok) {
    //       throw new Error(`Error fetching data: ${response.statusText}`)
    //     }
    //     const data = await response.json()
    //     setLaps(data)
    //   } catch (error) {
    //     console.error('Failed to fetch lap data:', error)
    //     setLaps([])
    //   }
    // }
    const fetchDrivers = async () => {
      try {
        const response = await fetch(`https://api.openf1.org/v1/drivers?session_key=${id}`)
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`)
        }
        const data = await response.json()
        setDrivers(data)
      } catch (error) {
        console.error('Failed to fetch driver data:', error)
        setDrivers([])
      }
    }
    fetchDrivers()
    //fetchLaps()
  }, [])

  return drivers === null ? (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold">Loading data...</h1>
    </main>
  ) : (
    <DriverTable drivers={drivers} />
  )
}
