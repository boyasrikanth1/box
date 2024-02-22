import data from "./data";

const Message=()=>{
    return(
        <main className="continer">
<ul className="comment-continer">

    {
        data.map((obj)=>{
            return <li className="comment">
                <div className="header">
                    <h3 className="email">{obj.email}</h3>
                    <h3 className="name">{obj.name}</h3>
                </div>
                <p>{obj.body}</p>
            </li>
        })
    }
</ul>
        </main>
    )
}

export default Message;