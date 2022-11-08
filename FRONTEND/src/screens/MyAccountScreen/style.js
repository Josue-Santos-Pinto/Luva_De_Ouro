import styled from "styled-components/native"

export default {
    Container: styled.View`
        flex: 1;
    `,
    AvatarArea: styled.View`
        width: 200px;
        height: 200px;
        border-radius: 100px;
        border: 1px solid #000;
        margin: 20px auto;
        justify-content: center;
        align-items: center;
    `,
    Avatar: styled.View``,
    InputArea: styled.View`
        width: 100%;
        flex-direction: column;
        padding: 10px ;
        justify-content: center;
        align-items:center;
    `,
    Text: styled.Text`
        font-size: 20px;
        margin-bottom: 5px;
        text-align: center;
    `,
    TextValue: styled.Text`
        text-align: center;
    `,
    Input: styled.TextInput`
        border: 1px solid #000;
        border-radius: 5px;
        padding: 5px;
        width: 80%;
        margin: auto;
    `,
    Button: styled.TouchableOpacity`
        width: 60%;
        margin: 25px auto;
        padding: 10px;
        border-radius: 5px;
        background-color: #202024;
        justify-content: center;
        align-items: center;
    `,
    ButtonText: styled.Text`
        color: #FFF;
        font-size: 15px;
    `,
    ModalArea: styled.View`
        flex: 1;
    `,
    ModalTitle: styled.Text`
        font-size: 23px;
        margin-top: 15px;
        margin-bottom: 15px;
        text-align: center;
    `,
    Select: styled.View`
        width: 80%;
        border: 1px solid #000;
        font-size: 15px;
        border-radius: 5px;
        margin: auto;
    `,
}