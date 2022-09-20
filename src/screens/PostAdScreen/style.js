import styled from "styled-components/native";

export default {
    Container: styled.View``,
    Scroll: styled.ScrollView``,
    Text: styled.Text``,
    AddPhotoArea: styled.View`
        width: 100%;
        height: 250px;
        background-color: #DDD;
        justify-content: center;
        align-items: center;
    `,
    AddPhoto: styled.TouchableOpacity`
        width: 90%;
        height: 90%;
        border-radius: 15px;
        border: 1px solid #000;
        justify-content: center;
        align-items: center;
    `,
    NewItemInfo: styled.View`
        flex-direction: column;
        padding: 15px;
    `,
    ItemTitle: styled.Text`
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    `,
    ItemField: styled.TextInput`
        width: 90%;
        height: 40px;
        padding: 10px;
        border-radius: 10px;
        border-width: 1px;
        border-color: #333;
    `,
    ItemFieldDesc: styled.TextInput`
        width: 90%;
        height: 80px;
        padding: 10px;
        border-radius: 10px;
        border-width: 1px;
        border-color: #333;
    `,
    CategoryButton: styled.TouchableOpacity`
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        border-bottom-width: 2px;
        border-color: #DDD;
    `,
    CategoryText: styled.Text`
        color: #bbb;
    `,
    ItemFieldCep: styled.TextInput`
        width: 50%;
        height: 40px;
        padding: 10px;
        border-radius: 10px;
        border-width: 1px;
        border-color: #333;
    `,
    SendButtonArea: styled.View`
        width: 100%;
        height: 60px;
        justify-content: center;
        align-items: center;
    `,
    SendButton: styled.TouchableOpacity`
        width: 100px;
        height: 40px;
        border-radius: 10px;
        background-color: #000;
        justify-content: center;
        align-items: center;
    `,
    SendButtonText: styled.Text`
        font-size: 15px;
        color: #FFF;
    `,
    BackButton: styled.TouchableOpacity`
        margin: 15px;
    `,
    CategoryListButton: styled.TouchableOpacity`
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        border-bottom-width: 2px;
        border-color: #DDD;
`,
    CategoryListText: styled.Text`
        color: #000;
`,
    View: styled.View``,
    Photo: styled.Image`
        width: 100%;
        height: 100%;
    `
}