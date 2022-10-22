import styled from "styled-components/native"

export default {
    Container: styled.View`
        flex: 1;
    `,
    AvatarArea: styled.View`
        width: 200px;
        height: 200px;
        border-radius: 100px;
        background-color: #000;
        margin: 20px auto;
    `,
    Avatar: styled.View``,
    InputArea: styled.View`
        width: 100%;
        flex-direction: column;
        padding: 10px ;
    `,
    Text: styled.Text`
        font-size: 20px;
        margin-bottom: 5px;
    `,
    Input: styled.TextInput`
        border-bottom: 1px solid #000;
        border-radius: 5px;
        padding: 5px;
        width: 80%;
    `,
    Button: styled.TouchableOpacity`
        margin: 25px auto;
        padding: 10px;
        border-radius: 5px;
        background-color: #62dafc;
        justify-content: center;
        align-items: center;
    `,
    ButtonText: styled.Text`
        color: #FFF;
    `
}