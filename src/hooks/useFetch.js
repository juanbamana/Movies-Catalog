import { useState, useEffect } from 'react'


export const useFetch = (url, options) => {


    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)



    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, options)
                const json = await res.json()
                setResult(json)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false);

            }
        })()

    }, [url, options])

    return {result, loading, error}

}
