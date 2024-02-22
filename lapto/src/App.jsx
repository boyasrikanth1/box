import React from "react";
import data from "./data";

const Message=()=>{
    return(
        <main className="continer">
            <img src="https://5movierulz.bond/wp-content/uploads/2024/02/Sheeshmahal-Telugu-Poster.jpg" alt="this is kakashi"/>
            <ul className="comment-continer">


                {
                    data.map((eachobj)=>{
                        const {id,email,name,body}=eachobj
                        return<li key={id} className="comment">

                            <div className="header">
                                <h3 className="email">{email}</h3>
<h3 className="name">{name}</h3>
                            </div>
                            <p className="message">{body}</p>
                        </li>
                    })
                }
               

               
            </ul>
        </main>
    )
}

export default Message;