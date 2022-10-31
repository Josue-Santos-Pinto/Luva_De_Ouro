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
        border-radius: 5px;
        border-color: #CCC;
        border-radius: 5px;
        background-color: #201f24;
        margin-top: 15px;
        margin-bottom: 15px;
        color: #FFF;
    `,
    Select: styled.View`
        border-width: 1px;
        border-color: #CCC;
        background-color: #201f24;
        border-radius: 5px;
        color: #6e6d75;
        font-size: 15px;
        margin-top: 15px;
        margin-bottom: 15px;
    `,
    Field: styled.TextInput`
        border-width: 1px;
        border-color: #CCC;
        background-color: #201f24;
        border-radius: 5px;
        color: #FFF;
        font-size: 15px;
        padding: 10px;
        margin-top: 15px;
        margin-bottom: 15px;
    `,
    FieldPassword: styled.TextInput`
        width: 85%;
        
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background-color: #201f24;
        padding: 10px;
        color: #FFF;
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