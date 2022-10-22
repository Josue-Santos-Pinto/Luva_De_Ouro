import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
        padding: 20px;
        background-color: #121214;
    `,
    Logo: styled.Image`
        width: 150px;
        height: 100px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 15px;
        margin-top: -30px;
    `,
    InputArea: styled.View`
        flex-direction: row;
        align-items: center;
        border-width: 1px;
        border-color: #CCC;
        border-radius: 5px;
        background-color: #FFF;
        margin-top: 15px;
        margin-bottom: 15px;
    `,
    Select: styled.View`
        border-width: 1px;
        border-color: #CCC;
        background-color: #FFF;
        border-radius: 5px;
        color: #000;
        font-size: 15px;
        margin-top: 15px;
        margin-bottom: 15px;
    `,
    Field: styled.TextInput`
        border-width: 1px;
        border-color: #CCC;
        background-color: #FFF;
        border-radius: 5px;
        color: #000;
        font-size: 15px;
        padding: 10px;
        margin-top: 15px;
        margin-bottom: 15px;
    `,
    FieldPassword: styled.TextInput`
        width: 85%;
        padding: 10px;
        color: #000;
        font-size: 15px;
    `,
    IconShowPassword: styled.TouchableOpacity`
        justify-content: center;
        align-items: center;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: #62dafc;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-top: 15px;
    `,
    ButtonText: styled.Text`
        color: #075470;
        font-size: 15px;
        font-weight: bold;
    ` 
}