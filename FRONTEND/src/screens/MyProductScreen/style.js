import styled from "styled-components/native";

export default {
Item: styled.View`
    flex: 1;
 
 `,
 AddImageArea: styled.View`
    height: 250px;
    width: 100%;
 `,
 AddImage:styled.Image`
    width: 100%;
    height: 100%;
 `,
 AddInfo: styled.View`
    width: 100%;
    padding: 15px;
    flex-direction: column;
 `,
 Text: styled.Text``,
 Input:styled.TextInput`
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
 `,
 InputDesc: styled.TextInput`
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
    height: 120px;
 `,
 Button: styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 5px;
    background-color: ${props=>props.color}
    justify-content: center;
    align-items: center;
 `,
 ButtonText: styled.Text`
    color: #FFF;
    font-size: 20px;
 `
 

}