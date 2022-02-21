import React from 'react';
import { Wrapper, Content } from './Grid.Styles';
import HomeImage from '../HomeImage';
import Greeting from '../Greeting';

const Grid = ({leftImage, rightGreeting}) => {

    return (
        <Wrapper>
            <Content>
                <HomeImage/>
                <Greeting />
            </Content>
        </Wrapper>
    );
}

export default Grid;