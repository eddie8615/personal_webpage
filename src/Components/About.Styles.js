import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 10px auto;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;

`;

export const Text = styled.div`
    
    /* position: absolute; */
    font-weight: 600;
    color: var(--lightGrey);
    animation: animateHomeImage 1s;

    @keyframes animateHomeImage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    h1{
        font-size: var(--fontSuperBig);
        font-weight: 600;

        @media screen and (max-width: 720px){
            font-size: var(--fontBig)
        }
    }
    h2 {
        font-size: var(--fontBig);
        margin: 10px;
    }

    p {
        font-size: var(--fontMed);
        font-family: 'Poppins', sans-serif;
        font-weight: 100;
        padding: 1rem auto;

        @media screen and (max-width: 720px){
            font-size: var(--fontsmall);
        }
    }

    a {
        color: #2D7992;
        text-decoration: none;
    }

    @media screen and (max-width: 720px){
        max-width: 100%
    }
`;

export const Line = styled.hr`
    color: rgba(0, 0, 0, 0.65);
    margin-left: -100px;
`;