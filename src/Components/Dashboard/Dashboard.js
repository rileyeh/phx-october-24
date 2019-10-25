import React from 'react'
import './Dashboard.css'
import store, { CLEAR_USER } from '../../store'
import axios from 'axios'

export default function Dashboard(props) {
    const reduxState = store.getState()
    const { name } = reduxState

    const logout = () => {
        axios
            .get('/auth/logout')
            .then(res => {
            store.dispatch({
                type: CLEAR_USER
            })
            props.history.push('/')
        })
    }

    return (
        <div className='dash'>
            <nav>
                <button onClick={logout}>logout</button>
            </nav>
            <h1>hey there, {name}</h1>
        </div>
    )
}