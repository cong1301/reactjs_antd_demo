import React from 'react'
import { InputSreach } from './styles'
export default function CustomSreach({ onChange, value, placeholder }) {
    return (
        <>
            <InputSreach
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </>
    )
}

