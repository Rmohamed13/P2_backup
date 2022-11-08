import React from 'react'
import styled from 'styled-components'

const StyleHeader = styled.div`
background-color: red;
    color: black;
    text-align: center;
    justify-content: center;
    display: grid;
    font-size: 45px;
    text-transform: uppercase;
    border: 1px;
    border-color: black;
    font-family: BentonSans,'Courier New', Courier, monospace;
    font-weight: bold;
    
    
`
function Header() {
    return(
        <div className="top-container">
            
            <div className="header">
        <StyleHeader>
           DOMA:Enhanced Individual Search
        </StyleHeader>
        
             </div>
        </div>
    )
}

export default Header;