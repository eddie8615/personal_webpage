import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;

`;

export const Content = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom: 0;
    max-width: var(--maxWidth);
    font-weight: 500;
    font-family: 'Poppins', sans-serif;


    a {
        text-decoration: none;
    }

    li {
        display: inline-block;
        width: 100px;
        height: 100%;
        border-radius: 10px;
        padding: 10px 10px 10px 10px;
        text-align: center;
        position: relative;
        color: var(--white);
        list-style: none;
        

        :hover{
            background-color: #2D7992;
        }
    }

    .active {
        
        li {
            background-color: #2D7992;
        }
    }   
`;

export const Item = styled.ul`
    display: inline-block;
    
    min-width: 120px;
    height: 60px;
    border-radius: 10px;
    border: 0;
    color: var(--white);
    font-size: var(--fontMed);
    cursor: pointer;

    a {
        text-decoration: none;
    }

    .current {
        li {
            background-color: #F67B59;
        }
    }
    :hover{
        background-color: #F67B59
    }
`;