import styled from "styled-components";

export const Wrapper = styled.div`
    background: url(${({ image }) => image});
    background-size: 100%, cover;
    background-position: center;
    height: 750px;
    position: relative;
    margin: 2em 5%;
    animation: animateHomeImage 1s;

    @keyframes animateHomeImage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;


