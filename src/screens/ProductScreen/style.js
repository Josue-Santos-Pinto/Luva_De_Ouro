import styled from "styled-components/native";

export default {
Item: styled.View`
    flex: 1;
 
 `,
  Scroll: styled.ScrollView`
     flex: 1;
     flex-direction: column;
 `,
  Image: styled.Image`
     width: 100%;
     height: 250px;
     background-color: #DDD;
 `,
  ItemTitle: styled.View`
     padding: 10px;
 `,
  Price: styled.Text`
     font-size: 25px;
     padding: 10px;
 `,
  TextTitle: styled.Text`
     font-size: 20px;
     border-bottom-width: 1px;
     border-color: #CCC;
     padding: 10px;
 `,
 
  ItemDesc: styled.View`
     padding: 10px;
 `,
  Text: styled.Text`
     font-size: 20px;
     font-weight: bold;
     margin: 10px auto;
 `,
  Desc: styled.Text``,
 
  ItemLocalization: styled.View`
     padding: 10px;
 `,
  ItemArea: styled.View`
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     padding: 5px 10px;
 `,
  ItemValue: styled.Text``,
  Seller: styled.View`
     padding: 10px;
     margin-bottom: 50px;
 `,
  ButtonArea: styled.View`
     width: 100%;
     height: 50px;
     justify-content: center;
     align-items: center;
     position: absolute;
     bottom: 10px;
 `,
  ChatButton: styled.TouchableOpacity`
     width: 80px;
     height: 30px;
     border-radius: 10px;
     background-color: #000;
     justify-content: center;
     align-items: center;
 `,
  ChatText: styled.Text`
     color: #FFF;
 `
 

}