import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styled from "styled-components"


const StyledDiv = styled.div
    `border: 2rem;
    border-radius: 450%;
    background-color:red;
    color: white;
    align-items:center;
    justify-content: center;
    display: grid;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    font-weight: bold;
    text-decoration-line: none;
    
    `


export default function Navbar() {
    const path = window.location.pathname
    return (
        <StyledDiv>
            <nav className="navbar">
                <Link to="/" className="site-title">
                 
                </Link>

                <ul>
                    <CustomLink to='/'>Profile</CustomLink>
                    <CustomLink to='/'>Events</CustomLink>
                    <CustomLink to='/mostwanted'>Most Wanted</CustomLink>
                    <CustomLink to='/'>Teams</CustomLink>
                    <CustomLink to='/about'>About Us</CustomLink>
            
                </ul>

             </nav>
     </StyledDiv>
    )
}


function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive =useMatch({ path: resolvedPath.pathname, end: true})
    return (
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>
    )
}