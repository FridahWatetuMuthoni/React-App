import { useState } from "react"

const SignUp = ()=>{

    const styles = {
        color:'red'
    }

    const[formData, setFormData]=useState({
        username:'',
        password1:'',
        password2:'',
        join:false
    })

    const[error, setError]=useState('')
    
    const handleChange=(e)=>{
        const{name,value,type,checked}=e.target
        setFormData((prev)=>{
            return(
                {
                    ...prev,
                    [name]:type==='checkbox'? checked:value
                }
            )
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(formData.username && formData.password1 && formData.password2){
            if(formData.password1 === formData.password2){
                if(formData.join){
                    console.log('Thank you for subcribing to our newsletter')
                }
                console.log('successfully signed up')
                console.log(formData)
            }
            else{
                setError('Password 1 must match password 2')
            }
        }
        else{
            setError('All form fields must be entered')
        }
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <div>
                {
                    error && <p style={styles}>{error}</p>
                }
            </div>
            <div>
                <input type="text" name="username" id="username" 
                placeholder="enter your username"
                onChange={handleChange}
                value={formData.username}
                />
            </div>
            <div>
                <input type="password" name="password1" id="password1"
                placeholder="enter password 1"
                value={formData.password1}
                onChange={handleChange}
                />
            </div>
            <div>
                <input type="password" name="password2" id="password2" 
                placeholder="enter password 2"
                value={formData.password2}
                onChange={handleChange}
                />
            </div>
            <div>
                <input type="checkbox" name="join" id="join" 
                checked={formData.join}
                onChange={handleChange}

                />
                <label htmlFor="join">I want to join the newsletter</label>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUp