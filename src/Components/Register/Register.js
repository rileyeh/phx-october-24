import React, { Component } from 'react'
import axios from 'axios'
import './Register.css'
import store, { SAVE_USER } from '../../store'

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
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

    handleRegister = () => {
        const { name, email, password } = this.state

        axios
            .post('/auth/register', { name, email, password })
            .then(res => {
                store.dispatch({
                    type: SAVE_USER,
                    payload: res.data
                  })
                this.props.history.push('/dash')
            })
            .catch(err => {
                alert('user already exists')
            })
    }

    render() {
        return (
            <div className='register'>
                <h1 
                onClick={() => this.props.history.push('/')}
                className='back'>X</h1>
                <input 
                    name='name'
                    type='text'
                    placeholder='name'
                    onChange={this.handleChange}
                    value={this.state.name}
                    className='reg-inputs'
                />
                <input 
                    name='email'
                    type='text'
                    placeholder='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                    className='reg-inputs'
                />
                <input 
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={this.handleChange}
                    value={this.state.password}
                    className='reg-inputs'
                />
                <button 
                    onClick={this.handleRegister}
                    className='reg-btn'
                    >register</button>
            </div>
        )
    }
}