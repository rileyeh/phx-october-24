import React, { Component } from 'react'
import './Login.css'
import axios from 'axios'
import store, { SAVE_USER } from '../../store'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    login = () => {
        const { email, password } = this.state

        axios
            .post('/auth/login', { email, password })
            .then(res => {
                store.dispatch({
                    type: SAVE_USER,
                    payload: res.data
                })
                this.props.history.push('/dash')
            })
            .catch(err => {
                alert('please use a valid email and password')
            })
    }

    render() {
        return (
            <div className='login'>
                <h1 
                onClick={() => this.props.history.push('/')}
                className='back'>X</h1>
                <input 
                    name='email'
                    type='text'
                    placeholder='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                    className='login-input'
                />
                <input 
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={this.handleChange}
                    value={this.state.password}
                    className='login-input'
                />
                <button 
                    onClick={this.login}
                    className='login-btn'
                >login</button>
            </div>
        )
    }
}