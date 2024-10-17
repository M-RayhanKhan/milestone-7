
export default function Friend({friend}){
    const {name, email} = friend;
    return(
        <div className="friends">
            <h5>Name: {name}</h5>
            <h5>Email: {email}</h5>
        </div>
    )
}