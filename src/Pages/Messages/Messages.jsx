import React from 'react'
import { useParams } from 'react-router-dom';

function Messages() {
    let { id } = useParams();
    return (
        <div className="Messages">
            Messages {id}
        </div>
    )
}

export default Messages
