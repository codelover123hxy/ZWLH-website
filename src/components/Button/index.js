import '../../assets/styles/button.scss'

export default function Button(props) {
    const { action } = props
    
    return (
        <button className={`btn ${props.colorStyle === 'red'? 'red': ''} 
        ${props.colorStyle === 'green'? 'green': ''}`} onClick={action}
        style={{
            width: props.width || (props.size === 'small'? 'max-content': ''), 
            height: props.height || (props.size === 'small'? '30px': ''), 
            borderRadius: '5px', 
            backgroundColor: props.color  
        }}
        >{ props.btnName }</button>
    )
}
