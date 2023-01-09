import { useState } from "react"

const Form = (props) => {
    const setData = props.setData
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [thingsArr, setThingsArr] = useState([])
    const [contact, setContact] = useState({
        name: "john",
        phone: '45555685235',
        email: "realname@gmail.com",
        isFavorite:true
    })

    const toggleFavorite = () => {
        setContact((prev) => {
            return {...prev,isFavorite:!prev.isFavorite}
        })
    }

    const handleClick = () => {
        let newThing = `Thing ${thingsArr.length+1}`
        setThingsArr((prev) => {
            return [...prev,newThing]
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email && username) {
            const user = { id: new Date().getTime(), username, email }
            console.log(user)
            setData((prevState) => {
                return [...prevState,user]
            })
            setEmail('')
            setUsername('')
        }
    }
    return(
        <section>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={username} onChange={e=>setUsername(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <section>
                <button onClick={handleClick}>Add Item</button>
                <section>
                    {
                        thingsArr.map((thing,index) => {
                            return (
                                <h1 key={index}>{ thing}</h1>
                            )
                        })
                    }
                </section>
                <section className="margin">
                                <div >
                                    <h1>{contact.name}</h1>
                                    <p>{ contact.email}</p>
                                    <p>{contact.phone }</p>
                                    <p>{contact.isFavorite ? 'favorite' :'not favorite'}</p>
                                    <button onClick={toggleFavorite}>Toggle Favorite</button>
                                </div>
                </section>
            </section>
        </section>

    )
}

export default Form