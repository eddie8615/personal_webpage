import React from 'react';
import { NavLink as Link } from 'react-router-dom';
// Styles
import { Wrapper, Content } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to="/" activeClassName="active" exact><li>Home</li></Link>
            <Link to="/about" activeClassName="active" exact><li>About</li></Link>
        </Content>
    </Wrapper>
);

export default Header;