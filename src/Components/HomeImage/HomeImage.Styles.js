import styled from "styled-components";

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, rgba(0, 0, 0, 0)
        39%, rgba(0, 0, 0, 0)
        41%, rgba(0, 0, 0, 0.65)
        100%
    ),
    url(${({ image }) => image});
    background-size: 100%, cover;
    background-position: center;
    height: 500px;
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


