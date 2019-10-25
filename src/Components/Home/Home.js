import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <nav>
                <Link to='/login' className='link'><button>login</button></Link>
                <Link to='/register' className='link'><button>register</button></Link>
            </nav>
            <h1>welcome to this website</h1>
            <h2>click the buttons above to login or register</h2>
        </div>
    )
}