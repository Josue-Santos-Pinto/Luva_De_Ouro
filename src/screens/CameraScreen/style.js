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
    `,
    CamButton: styled.TouchableOpacity`
        margin-bottom: 20px;
    `
    
}