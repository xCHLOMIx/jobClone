import { useEffect, useState } from "react"

export const useFetch = (url: string) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()

            setData(json)
        }

        fetchData()
    }, [])

    return { data }
}