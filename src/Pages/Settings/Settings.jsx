import React from 'react'
import { useParams } from 'react-router-dom';

function Settings() {
    let {section}=useParams()
    return (
        <div className="Settings">
            Settings - {section}
        </div>
    )
}

export default Settings
