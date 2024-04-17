import '../../assets/styles/label.scss'


export default function Label(props) {

    return (
        <div className="custom-label"
        style={{width: props.width, height: props.height,
            backgroundColor: props.color,
            borderRadius: props.borderRadius,
        textAlign: 'center'}}>
            {
                props.icon && 
                <img src={props.icon}></img>
            }
            {props.text}
        </div>
    )
}