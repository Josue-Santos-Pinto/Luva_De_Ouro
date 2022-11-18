import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
        background-color: #201f24;
        padding-left: 15px;
        padding-right: 15px;
    `,
    ProductsList: styled.FlatList`
        flex: 1;
        margin-top: 20px;
    `,
    Text: styled.Text``,
    ButtonsArea: styled.TouchableOpacity`
        margin-right: 20px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `,
    SearchButton: styled.TouchableOpacity`
        
        flex-direction: row;
        background-color: #FFF;
        border-radius: 5px;
        width: 300px;
        overflow: hidden;
        border: 2px solid #333;
    `,
   
    InputText: styled.TextInput`
        width: 90%;
        padding: 7px;
    `,
    SearchButtonIcon: styled.TouchableOpacity`
        justify-content: center;
        align-items: center;
    `,

    NotificationButton: styled.TouchableOpacity`
        margin: 0 15px;
    `,
    FavButton: styled.TouchableOpacity`
        margin: 0 15px;
    `,


}