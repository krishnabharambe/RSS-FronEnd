import React from 'react'
import { Link } from 'react-router-dom'

export default function RequestSubmitted() {
    return (
        <div>
            Your request has been submitted.

            <Link to={{
                pathname: "/"
            }}> Home</Link>
        </div>
    )
}
