import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
        justify-content: center;
    `,
    View: styled.View``,
    Text: styled.Text``,
    CameraButtons: styled.View`
        flex: 1;
        background-color: transparent;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-end;
        z-index: 2;
    `,
    CamButton: styled.TouchableOpacity`
        margin-bottom: 20px;
    `,
    PhotoItem: styled.View`
       flex: 1;
    `,
    Photo: styled.Image`
        width: 100%;
        height: 90%;
        margin-bottom: 5px;
        
    `,
    RemoveButton: styled.TouchableOpacity``
    
}