
const Image = (props) => {
    return(
        <img style={{ width: props.width, float: props.float }} src={props.src} />
    )
}

export default Image