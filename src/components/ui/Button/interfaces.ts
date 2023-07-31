type ButtonVariant = 'solid' | 'outline' | 'text'
type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonColor = 'default' | 'primary' | 'secondary' | 'danger'

export interface ButtonProps {
    children: React.ReactText
    className?: string
    disabled?: boolean
    variant: ButtonVariant
    size: ButtonSize
    color: ButtonColor
}
