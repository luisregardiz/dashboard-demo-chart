import { FC } from 'react'
import clsx from 'clsx'
import './Button.css'
import { getButtonColor, getButtonSize, getButtonVariant } from './utils'
import { ButtonProps } from './interfaces'

export const Button: FC<ButtonProps> = ({ children, className, variant, size, color }) => {
    const buttonClasses = clsx(
        className,
        getButtonVariant(variant),
        getButtonSize(size),
        getButtonColor(color),
    )
    return <button className={buttonClasses}>{children}</button>
}
