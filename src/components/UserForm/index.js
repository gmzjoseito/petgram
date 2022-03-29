import React from 'react'
import { useInputValue } from '../../hooks/useInputValue.js'

export const UserForm = ({ onSubmit }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    return <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" {...email} />
        <input placeholder="Password" type="password" {...password} />
        <button>Iniciar sesión</button>
    </form>
}