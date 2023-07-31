import { HTMLAttributes, ReactElement, ReactText } from 'react'

interface HeaderTextProps {
    children: ReactText | ReactElement
}
const HeaderText = (props: HeaderTextProps | HTMLAttributes<HTMLHeadingElement>) => {
    const { children, ...rest } = props
    return <h1 {...rest}>{children}</h1>
}

export default HeaderText
