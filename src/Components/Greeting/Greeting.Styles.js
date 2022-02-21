import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    padding: 20px;
`;

export const Content = styled.div`
`;

export const Text = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    margin-left: 10px;
    min-height: 100px;
    font-weight: 600;
    color: var(--white);

    h1{
        font-size: var(--fontSuperBig);
        font-family: 'Poppins', sans-serif;
        font-weight: 600;

        @media screen and (max-width: 720px){
            font-size: var(--fontBig)
        }
    }

    p {
        font-size: var(--fontMed);
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        padding: 1rem auto;

        @media screen and (max-width: 720px){
            font-size: var(--fontsmall);
        }
    }

    @media screen and (max-width: 720px){
        max-width: 100%
    }
`;