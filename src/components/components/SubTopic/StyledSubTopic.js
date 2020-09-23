import style from "styled-components";

export const SubTopicBar = style.div`
    position : absolute;
    width : 1200px;
    height : 400px;
    top : 50%;
    left : 50%;
    margin : 0 0 0 -600px;
    overflow : auto;
    border-radius : 20px;
    background-color : #f4f4f4;
    @media screen and (max-width : 768px){
        width : 500px;
        height : 400px;
        top : 45%;
        margin-left : -250px;
    }

    @media screen and (max-width : 414px){
        width : 350px;
        height : 400px;
        margin-left : -175px;
    }
    
`;

export const SubTopicContent = style.div`
    position : relative;
    width : 1100px;
    height : 180px;
    margin : 10px 50px;
    border-radius : 10px;
    background-color : #fddb3a;
    font-size : 22px;
    cursor : pointer;
    z-index : 1;
    .add-btn{
        position : absolute;
        background-color : tarnsparent;
        width : inherit;
        height : inherit;
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
        z-index : 5;
        .btn{
            cursor : pointer;
        }
        .btn:hover{
            color : white;
        }
    }
    .topic{
        position : relative;
        display : -webkit-box;
        -webkit-line-clamp : 3;
        -webkit-box-orient : vertical;
        width : 1080px;
        height : 110px;
        line-height : 40px;
        text-align : center;
        top : 20%;
        margin : 0;
        padding : 0 10px 15px 10px;
        overflow : hidden;
        text-overflow : ellipsis;
        word-break : break-all;
        font-weight : bold;
        font-size : 24px;

    }
    .addSubTopicBar{
        position : absolute;
        padding : 10px 20px;
        width : 1060px;;
        height : 160px;
        text-align : center;
        font-size : 22px;
        background-color : transparent;
        border : none;
        border-radius : 10px;
        font-weight : bold;
        :focus{
            outline : none;
            background-color :#fddb3a;
        }
    }

   
    .coverBackgroundOfNoChecked{
        position : absolute;
        top : 0;
        left : 0;
        width : inherit;
        height : 0;
        border-radius : 20px;
        background : black;
        opacity : 0.4;
        transition : all .4s linear;
    }
    .checkedCoverofNoChecked{
        position : absolute;
        top : 50%;
        left : 50%;
        width : 120px;
        height : 120px;
        color : #c10000;
        opacity : 0;
        margin : -6vh 0 0 -50px;
        transition : all .6s linear;
    }
    
    :hover{
        .coverBackgroundOfNoChecked{
            height : inherit;
        }
        .checkedCoverofNoChecked{
            opacity : 0.8;
        }
    }
      
    @media screen and (max-width : 768px){
        width : 450px;
        height : 80px;
        margin : 10px 25px;
        
        .add-btn{
            width : inherit;
            height : inherit;
            font-size : 40px;
            line-height : 80px;
        }
        .addSubTopicBar{
            width : 430px;
            height : 60px;
            position : absolute;
            padding : 5px 10px;
            font-size : 20px;
        }

        .btn-box{
            font-size : 20px;        
        }
        .topic{
            width : 440px;
            height : 50px;    
            line-height : 25px;
            top : 25%;
            margin-right : 0;
            padding : 0 5px 5px 5px;
            font-size : 18px;
        }
        .checkedCover{
            width : 60px;
            height : 60px;
            opacity : 0;
            margin : -3vh 0 0 -30px;
        }
    }

    @media screen and (max-width : 414px){
        width : 300px;
        height : 80px;
        margin : 10px 25px;

        .add-btn{
            width : inherit;
            height : inherit;
            font-size : 24px;
            line-height : 80px;
        }
        .addSubTopicBar{
            width : 280px;
            height : 70px;
            position : absolute;
            padding : 5px 10px;
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
