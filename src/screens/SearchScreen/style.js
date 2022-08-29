import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
    `,
    ProductsList: styled.FlatList`
        flex: 1;
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
        width: 170px;
        overflow: hidden;
    `,
   
    InputText: styled.TextInput`
        width: 80%;
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