export default function ValidationBlock({msg}){
    return (
        <div>
            <li className={"alert alert-danger"} role="alert">
                {msg}
            </li>
        </div>
    )
}