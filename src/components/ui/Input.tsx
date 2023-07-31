import { InputHTMLAttributes } from 'react'

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    const { ...rest } = props
    return <input {...rest} />
}

export default Input
