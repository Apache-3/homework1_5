
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <div className="logo">logo</div>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='posts'>Posts</NavLink></li>
                    <li><NavLink to='create-posts'>Create posts</NavLink></li>
                </ul>
            </nav>
            <div className="nav__button">
                <button>register</button>
                <button>sign up</button>
            </div>
        </header>
    )
}
