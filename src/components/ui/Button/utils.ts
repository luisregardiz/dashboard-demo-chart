const getButtonVariant = (variant: string) => {
    switch (variant) {
        case 'solid':
            return 'btn-solid'
        case 'outline':
            return 'btn-outline'
        case 'text':
            return 'btn-text'
        default:
            return 'btn-solid'
    }
}

const getButtonSize = (size: string) => {
    switch (size) {
        case 'sm':
            return 'py-1 px-2'
        case 'md':
            return 'py-2 px-4'
        case 'lg':
            return 'py-3 px-6'
        default:
            return 'py-2 px-4'
    }
}

const getButtonColor = (color: string) => {
    switch (color) {
        case 'default':
            return 'btn-default'
        case 'primary':
            return 'btn-primary'
        case 'secondary':
            return 'btn-secondary'
        case 'danger':
            return 'btn-danger'
        default:
            return 'btn-default'
    }
}

export { getButtonVariant, getButtonSize, getButtonColor }
