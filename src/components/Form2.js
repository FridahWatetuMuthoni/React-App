import { useState } from "react"

const Form2 = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name:''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submited')
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="first_name">Enter First Name:</label>
            <input type="text" name="first_name" id="first_name" value={formData.first_namer} />
            <label htmlFor="last_name">Enter Last Name:</label>
            <input type="text" name="last_name" id="last_name" value={formData.last_name} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form2