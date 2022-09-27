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
        margin: 0 15px;
    `,
    NotificationButton: styled.TouchableOpacity`
        margin: 0 15px;
    `,
    FavButton: styled.TouchableOpacity`
        margin: 0 15px;
    `,


}