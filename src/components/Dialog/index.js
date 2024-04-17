import '../../assets/styles/common.scss'


export default function Dialog(props) {
    return (
        <div className="dialog"
        style={{...props.style}}>
            {props.children}
        </div>
    )
}