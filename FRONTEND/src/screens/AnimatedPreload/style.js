import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
    `,
    TitleArea: styled.View`
        width: 90%;
        height: 100px;
        margin: 20px auto;
    `,
    Title: styled.Text`
        font-size: 40px;
        font-weight: bold;
        text-align: center;
    `,
    SubTitle: styled.Text`
        font-size: 15px;
        text-align: center;
    `,
    ImageArea: styled.View`
        width: 100%;
        height: 40%;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
    `,
    Image: styled.Image`
        width: 100%;
        height: 100%;
    `,
    SloganArea: styled.View`
        width: 100%;
        height: auto;
    `,
    Slogan: styled.Text`
        font-size: 30px;
        text-align: center;
    `

}