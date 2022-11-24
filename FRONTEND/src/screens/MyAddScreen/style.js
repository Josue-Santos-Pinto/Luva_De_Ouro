import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
        padding-left: 15px;
        padding-right: 15px;
        background-color: #201f24;
    `,
    ProductsList: styled.FlatList`
        flex: 1;
    `,
    Text: styled.Text`
        color: #FFF;
    `,
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
    ItemArea: styled.View``,
    NoAdd: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
    `,
    NoAddText: styled.Text`
        font-size: 18px;
        color: #FFF;
    `,
    ActivityArea: styled.View`
        flex: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
    `

}