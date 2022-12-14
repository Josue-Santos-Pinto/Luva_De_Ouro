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
  CategoryArea: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
  `,
  CategoryText: styled.Text`
    font-weight: bold;
  `,
  CategoryValue: styled.Text`
    
  `,
 
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
     margin-bottom: 30px;
 `,
  ButtonArea: styled.View`
     width: 100%;
     height: 50px;
     justify-content: center;
     align-items: center;
     margin-bottom: 20px;
 `,
  ChatButton: styled.TouchableOpacity`
     width: 60%;
     height: 40px;
     border-radius: 5px;
     margin: auto 10px;
     background-color: #34af23;
     justify-content: center;
     align-items: center;
     flex-direction: row;
 `,
  ChatText: styled.Text`
     color: #FFF;
     font-weight: bold;
     font-size: 20px;
     margin-left: 10px
 `
 

}