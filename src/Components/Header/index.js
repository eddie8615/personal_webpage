import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>

            <span>About</span>
        </Content>
    </Wrapper>
)
    


export default Header;