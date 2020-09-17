import style from "styled-components";

export const SubTopicBar = style.div`
    position : absolute;
    width : 1200px;
    height : 600px;

    top : 32%;
    left : 50%;
    
    margin : 0 0 0 -600px;
    
    overflow : scroll;
    
    border : 1px solid gray;

    @media screen and (max-width : 768px){
        width : 500px;
        height : 500px;
        margin-left : -250px;
    }

    @media screen and (max-width : 414px){
        width : 350px;
        height : 450px;
        margin-left : -175px;
    }
    
`;

export const SubTopicContent = style.div`
    position : relative;
    width : 1100px;
    height : 150px;
    margin : 10px 50px;
    border-radius : 10px;
    background-color : #fddb3a;
    font-size : 22px;
    .plusBtn{
        position : absolute;
        background-color : tarnsparent;
        width : 1100px;
        height : 150px;
        color : white;
        font-size : 65px;
        line-height : 150px;
        text-align : center;
        border-radius : 10px;
        cursor : pointer;
        -webkit-transition : all 1s;
        :hover{
            background-color : #cf7500;
            color : #1a1c20;
        }
        :click{
            transform : rotate(180deg);
        }
    }

    .btn-box{
        position : absolute;
        right : 0;
        margin : 5px 5px 0 0;
        color : black;
        font-size : 28px;
        .btn{
            cursor : pointer;
        }
        .btn:hover{
            color : white;
        }
    }
    .topic{
        position : relative;
        width : 1080px;
        height : 120px;
        line-height : 65px;
        text-align : center;
        top : 20%;
        margin : 0;
        padding : 0 10px 15px 10px;
        word-break : break-all;
        font-weight : bold;
        font-size : 28px;
    }
    .addSubTopicBar{
        position : absolute;
        padding : 10px 20px;
        width : 1060px;
        height : 130px;
        text-align : center;
        font-size : 22px;
        background-color : transparent;
        border : none;
        border-radius : 10px;
        font-weight : bold;
        :focus{
            outline : none;
            background-color : white;
        }
    }


    @media screen and (max-width : 768px){
        width : 450px;
        height : 100px;
        margin : 5px 25px;
        
        .plusBtn{
            width : 450px;
            height : 100px;
            font-size : 40px;
            line-height : 100px;
        }
        .addSubTopicBar{
            position : absolute;
            padding : 5px 10px;
            width : 430px;
            height : 90px;
            font-size : 20px;
        }

        .btn-box{
            font-size : 20px;        
        }
        .topic{
            width : 440px;
            height : 75px;    
            line-height : 35px;
            top : 25%;
            margin-right : 0;
            padding : 0 5px 5px 5px;
            font-size : 18px;   
        }
    }

    @media screen and (max-width : 414px){
        width : 300px;
        height : 100px;
        margin : 5px 25px;

        .plusBtn{
            width : 300px;
            height : 100px;
            font-size : 35px;
            line-height : 100px;
        }
        .addSubTopicBar{
            position : absolute;
            padding : 5px 10px;
            width : 280px;
            height : 90px;
            font-size : 20px;
        }


        .btn-box{
            font-size : 20px;        
        }

        .topic{
            width : 290px;
            padding : 0 5px 5px 5px;
            word-break : break-all;
            font-size : 16px;   
        }
    }
`;
