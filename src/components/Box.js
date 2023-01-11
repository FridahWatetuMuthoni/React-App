const Box = (props) => {
    const styles = {
        backgroundColor: props.on ? '#222222': "#cccccc"
    }
    // conditional rendering
    const cond1 = "anna"
    const cond2 = "jane"
    const cond3 = "amber"
    const cond4 = ''
    if (cond1 && cond2 && cond3 && cond4) {
        console.log('They are are all true')
    }
    else {
        console.log('One of the values is false')
    }
    return (
        <div style={styles} className="box" onClick={()=>props.handleClick(props.id)}>
        </div>
    )
}

export default Box