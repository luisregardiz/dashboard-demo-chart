import React from 'react'
import { NavItems } from '../../utils/nav-items'

interface NavbarProps {
    navItems: NavItems[]
}
const Navbar = (props: NavbarProps) => {
    const { navItems } = props
    return (
        <header className='flex items-center justify-between py-10'>
            <div>logo</div>
            <nav>
                <ul className='flex items-center gap-x-4'>
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <a href={item.path}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
