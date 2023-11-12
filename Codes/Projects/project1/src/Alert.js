export default function Alerting(props) {

    return (
        <div style={{height:"80px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{(props.alert.type)[0].toUpperCase()+(props.alert.type).slice(1)}</strong> {props.alert.msg}
            </div>}
        </div>       
    );
}
