import style from "styled-components";

export const StyledMainTopicAnswerBar = style.div`
    position : absolute;
    width : 600px;
    height : 10vh;
    top : 60%;
    left : 50%;
    margin : -5vh 0 0 -305px;
    box-sizing : border-box;
    
    background-color : #fddb3a;
    border-radius : 10px;
    
    
    .buttonDisabled{
        position : absolute;
        border : none;
        width : 50px;
        height : 50px;
        background-color : #ddd;
        border-radius : 100%;
        cursor : pointer;

        left : 50%;
        margin : 3vh 0 0 -25px;

        transition : 0.25s all;
    }
    
    .buttonEnabled{
        position : absolute;
        border : none;
        width : 200px;
        height : 50px;
        background-color : #fddb3a;
        border-radius : 10px;
        cursor : pointer;

        left : 50%;
        margin : 3vh 0 0 -100px;

        transition : 0.25s all
    }
    
    button:active, button:focus{
        outline : none;
    }
    

    @media screen and (max-width : 768px){
        width : 500px;
        margin : -5vh 0 0 -250px;
    }

    @media screen and (max-width : 414px){
        width : 300px;
        margin : -5vh 0 0 -150px;
        .buttonEnabled{
            width : 150px;
            margin : 3vh 0 0 -75px;
        }
    }

`;

export const StyledMainTopicAnswerBarContent = style.div`
    position : relative;
    max-width : 600px;
    height : 10vh;
    margin : 0 auto;

    input[type = "text"]{
        position : absolute;
        height : 10vh;
        left : 0px;
        width : 100%;
        background-color : transparent;
        box-sizing : border-box;
        color : white;
        border : none;
        text-align : center;
        font-size : 26px;
        :focus{
            outline : none;
        }
        ::placeholder{
            color : white;
        }
    }

    @media screen and (max-width : 768px){
        input[type = "text"]{
            font-size : 22px;
        }
    }

    @media screen and (max-width : 414px){
        input[type = "text"]{
            font-size : 16px;
        }
    }
`;

export const StyledMainTopic = style.div`
    position : absolute;
    width : 1000px;
    height : 650px;
    left : 50%;
    top : 20%;
    margin : -5vh 0 0 -500px;
    
    animation : show 1s linear;
    @keyframes show{
        from{
            opacity : 0;
        }to{
            opacity : 1;
        }
    }

    @media screen and (max-width : 768px){
        width : 500px;
        height : 550px;
        margin-left : -250px;
    }

    @media screen and (max-width : 414px){
        width : 350px;
        height : 500px;
        margin-left : -175px;
    }
`;

export const StyledMainTopicContent = style.div`
    position : absolute;
    width : 100%;
    height : 80px;
    font-size : 34px;
    top : 50%;
    text-align : center;
    font-weight : bold;

    @media screen and (max-width : 768px){
        height : 74px;
        font-size : 26px;
    }

    @media screen and (max-width : 414px){
        height : 60px;
        font-size : 20px;
    }
`;
