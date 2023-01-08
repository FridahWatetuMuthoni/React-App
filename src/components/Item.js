const Item = (props)=>{
    const {name,phone,email} = props.item 
    return(
        <section>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
        </section>
    )
}

export default Item