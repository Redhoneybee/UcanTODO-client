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
        color : white;
        font-size : 24px;
        font-weight : bold;
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
        color : white;
        font-size : 24px;
        font-weight : bold;
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
        font-weight : bold;

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
export const StyledMainTopicContainer = style.div`
    position : absolute;
    width : 1160px;
    height : 100px;
    padding : 0 20px;
    left : 50%;
    top : 20%;
    margin : 2vh 0 0 -600px;
    border-radius : 20px;
    animation : show 1s linear;

    .mainTopic{
        position : absolute;
        width : inherit;
        height : inherit;
        background-color : #fddb3a;
        border-radius : 20px;
        cursor : pointer;

        .coverBackground{
            position : absolute;
            width : inherit;
            height : 0;
            top : 0;
            left : 0;
            background-color : black;
            border-radius : 20px;
            opacity : 0.4;
            transition : all .3s linear;
        }

        .fixedCover{
            position : absolute;
            width : 80px;
            height : 80px;
            top : 50%;
            left : 50%;
            margin : -40px 0 0 -40px;
            opacity : 0;
            transition : all .6s linear;
        }

    }
    
    .mainTopic:hover .coverBackground{
        height : inherit;
    }
    .mainTopic:hover .fixedCover{
        opacity : 0.6;
        transform : scale(1);
    }
    @keyframes show{
        from{
            opacity : 0;
        }to{
            opacity : 1;
        }
    }
    @media screen and (max-width : 768px){
        width : 460px;
        height : 80px;
        margin-top : 3vh;
        margin-left : -250px;
        .mainTopic .fixedCover{
            width : 60px;
            height : 60px;
            margin : -30px 0 0 -30px;
        }
    }

    @media screen and (max-width : 414px){
        width : 310px;
        height : 70px;
        margin-top : 5vh;
        margin-left : -175px;
        .mainTopic .fixedCover{
            width : 50px;
            height : 50px;
            margin : -25px 0 0 -25px;
        }
    }
`;

export const StyledMainTopicContent = style.div`
    position : absolute;
    width : inherit;
    height : inherit;
    line-height : 100px;
    font-size : 30px;
    text-align : center;
    font-weight : bold;
    overflow : hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
    @media screen and (max-width : 768px){
        height : 74px;
        line-height : 74px;
        font-size : 24px;
    }

    @media screen and (max-width : 414px){
        height : 60px;
        line-height : 60px;
        font-size : 18px;
    }
`;
