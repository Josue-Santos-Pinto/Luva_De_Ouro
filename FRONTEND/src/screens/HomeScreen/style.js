import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
        background-color: #201f24;
        padding-left: 15px;
        padding-right: 15px;
    `,
    InfoArea: styled.View`
        padding: 10px;
        height: 80px;
        justify-content: center;
        align-items: center;
    `,
    MyAdds: styled.Text`
        color: #FFF;
    `,
    TotalAdds: styled.Text`
        color: #FFF;
        margin: 10px;
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
        margin: 0 15px;
    `,
    NotificationButton: styled.TouchableOpacity`
        margin: 0 15px;
    `,
    FavButton: styled.TouchableOpacity`
        margin: 0 15px;
    `,


}