import style from "styled-components";

export const StyledMainView = style.div`
    background-color : white;
    box-sizing : border-box;
    width : 100%;
    height : 90vh;
    position : relative;

    @media screen and (max-width : 720px){
        max-width : 100%;
    }
`;
