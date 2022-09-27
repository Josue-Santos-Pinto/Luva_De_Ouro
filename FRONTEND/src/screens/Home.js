import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setEmail, setPassword} from '../redux/reducers/userReducer'
import { setTheme } from '../redux/reducers/themeReducer';

const Page = styled.View`
  flex: 1;
  
`
const Text = styled.Text`

`
const Button = styled.TouchableOpacity`
  background-color: blue;
  padding: 10px;
`
const InputText = styled.TextInput`
  border-width: 1px;
  border-color: #333;
  padding: 5px;
  margin: 10px;
`

export default () => {
    const user = useSelector((state) => state.user)
    const theme = useSelector((state) => state.theme)

    const switchTheme = (newTheme) => dispatch(setTheme(newTheme))

    const dispatch = useDispatch()

    const handleChangeText = (e) => {
      dispatch(setEmail(e))
    }
    const handleSwitchTheme = () => {
      switchTheme(theme.status === 'light' ? 'dark':'light')
    }


    return (
        <Page style={{backgroundColor: `${theme.status === 'light' ? '#FFF' : '#333'}`}}>
        
                <StatusBar />
                <Text>Meu nome é: {user.email} e tenho {user.password} anos</Text>
                <Text>Tema: {theme.status}</Text>
                <InputText 
                value={user.email}
                onChangeText={handleChangeText}
                />
                <Button onPress={handleSwitchTheme}>
                <Text>Switch Theme</Text>
            </Button>
        </Page>
    )
}

       