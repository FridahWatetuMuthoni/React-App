import { useState,useEffect } from "react"
import axios from 'axios'

const API = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(1)
    const [person, setPerson] = useState({})
    const [width, setWidth] = useState(window.innerWidth)
    

    const url = 'https://swapi.dev/api/people/'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        })
    }, [])

    useEffect(() => {
        const base_url = `https://swapi.dev/api/people/${count}`
        axios.get(base_url).then(response => {
            setPerson(response.data)
        })
    }, [count])
    
    useEffect(() => {
        function handleWidth() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidth)
        return () => {
            window.removeEventListener('resize',handleWidth)
        }
    },[])

    return(
        <section className="margin">
            <div>
                <h1>Window Size : { width}</h1>
            </div>
            <h1>All The Data from the API</h1>
            {
                data ? ( <pre>{ JSON.stringify(data,null,2)}</pre>) : <p>No data Available yet</p>
            }
            <h1>Personal Data</h1>
            <button onClick={() => setCount((prev => prev + 1))}>Get next Charater</button>
                {
                    person ? (<pre> {JSON.stringify(person, null, 2)}
                    </pre>) : <p>No person like that is availbale</p>
                }
        </section>
    )
}

export default API