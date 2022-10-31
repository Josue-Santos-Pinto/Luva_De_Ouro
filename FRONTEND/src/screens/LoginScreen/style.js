import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
        padding: 20px;
        background-color: #121214;
    `,
    Logo: styled.Image`
        width: 200px;
        height: 150px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5px;
    `,
    Title: styled.Text`
        font-size: 25px;
        font-weight: bold;
        text-align: center;
        padding: 10px;
        margin-bottom: 15px;
        color: #e1e0e5;
    `,
    InputArea: styled.View`
        flex-direction: row;
        align-items: center;
        margin-bottom: 15px;
        border-width: 1px;
        border-color: #CCC;
        border-radius: 5px;
        background-color: #201f24;
       
    `,
    Label: styled.Text`
        font-size: 20px;
        font-weight: bold;
        color: #e1e0e5;
        padding: 5px;
    `,
    Field: styled.TextInput`
        width: 70%;
        background-color: #201f24;
        color: #6e6d75;
        font-size: 15px;
        padding: 10px;
        margin: auto 5px;
        color: #FFF;
    `,
   
    EmailIcon: styled.View`
        justify-content: center;
        align-items: center;
        padding: 10px;
    `,
    IconShowPassword: styled.TouchableOpacity`
        justify-content: center;
        align-items: center;
        padding: 10px;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: #62dafc;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-top: 25px;
    `,
    ButtonText: styled.Text`
        color: #075470;
        font-size: 15px;
        font-weight: bold;
    `,
    Text: styled.Text`
        color: #6e6d75;
        padding: 10px;
        text-align: center;
        text-decoration: underline;
        margin-top: 10px;
    ` 
}