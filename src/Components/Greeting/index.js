import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Content, Text } from './Greeting.Styles';

const Greeting = () => (
    <Wrapper>
        <Content>
            <Text>
                <h1>Hi, I'm Changhyun Kim!</h1>
                <p>This is my public space of my past and current work, mostly side projects.
                    I would like to show what I'm currently doing and tell you who I am and what I like. 
                </p>

                <p></p>
                <p>I'm currently studying Applied Statistical Modelling and Health Informatics at King's College London.
                    I'm also interested in machine learning and statistical finance analysis along with statistical modelling in healthcare.
                    You can find my tech stacks and more information about me at <Link to='/about'>here</Link>

                </p>
            </Text>
        </Content>
    </Wrapper>
);

export default Greeting;