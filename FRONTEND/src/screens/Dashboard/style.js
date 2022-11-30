import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
        align-items: center;
        background-color: #201f24;
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
        background-color: #201f24;
    `,
    Title: styled.Text`
        text-align: center;
        font-size: 18px;
        color: #FFF;
        margin-top: 18px;
        margin-bottom: 20px;
    `,
    MyAddArea: styled.View`
        width: 90%;
        height: 500px;
        padding-top: 30px;
        border-radius: 16px;
        margin-bottom: 10px;
        background: rgba(255, 255, 255, 0.19);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        
    `,
    Graph: styled.View`
        margin-bottom: 30px;
        padding-bottom: 10px;
    `,
    SubtitleArea: styled.View`
        width: 100%;
        height: 200px;
        justify-content: center;
        align-items: center;
    `,
    Subtitle: styled.View`
        flex-direction: row;
        width: 100%;
        margin-left: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
    `,
    Square: styled.View`
        height: 20px;
        width: 20px;
        border-radius: 5px;
        background-color: ${props=>props.color};
        margin-right: 8px;
    `,
    SubtitleText: styled.Text`
        color: #FFF;
    `,
    Text: styled.Text`
        margin-left: 25px;
        padding: 10px;
        color: #FFF;
    `,
    AddImage: styled.Image`
        width: 80%;
        height: 100%;
        border-radius: 15px;
    `,
    ImageArea: styled.View`
        width: 100%;
        height: 250px;
        align-items: center;
        border-radius: 15px;
    `,
    ItemArea: styled.View`
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 5px;
        margin-bottom: 5px; 
    `,
    Item:styled.Text`
        font-weight: bold;
        color: #FFF;
    `,
    ItemValue: styled.Text`
        color: #FFF;
    `,
    TextArea: styled.View`
        flex: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        background-color: #201f24;
    `
}