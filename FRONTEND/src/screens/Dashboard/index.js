import React,{useEffect,useState} from "react";
import C from './style'
import {PieChart,LineChart, YAxis, Grid} from 'react-native-svg-charts'
import {Text} from 'react-native-svg'
import api from '../../services/api'
import { ActivityIndicator, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation()

    const [mostViewitem,setMostViewItem] = useState([])
    const [activeAdds,setActiveAdds] = useState()
    const [disableAdds,setDisableAdds] = useState()
    const [myAdds,setMyAdds] = useState()
    const [totalViews,setTotalViews] = useState()
    const [img,setImg] = useState('')
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        const loadDashboard = async () => {
            let data = await api.getDashboard()
            setMyAdds(data.total)
            setLoading(false)
            if(data.total > 3){
            setMostViewItem(data.higherViewerAdd)
            setImg(data.higherViewerAdd.images[0].url)  
            setActiveAdds(data.activeAdds)
            setDisableAdds(data.disableAdds)
            setTotalViews(data.totalViews)
            } else if(data.total <= 3) {
                alert('É necessário ter ao menos 4 anuncios para acessar essa página')
                navigation.reset({
                    index: 1,
                    routes:[{name:'HomeScreen'}]
                }) 

            } if((data.total > 3) && (data.totalViews == 0)){
                alert('É necessário ter ao menos 1 visualização em seus anúncios')
                navigation.reset({
                    index: 1,
                    routes:[{name:'HomeScreen'}]
                }) 
            }
            
        }
        
        loadDashboard()
        
    },[myAdds,totalViews,mostViewitem])

    
    
   
    

    const data = [
        {id:'01',value:activeAdds,color:'#282A3A'},
        {id:'02',value:disableAdds,color:'#C69749'},
    ]

    const data2 = [0,totalViews]

    const contentInset = { top: 20,bottom: 20 }
    


    const pieData = data.map((item,index)=>({
        value: item.value,
        key: item.id,
        svg:{
                fill: item.color 
        }
    }))


    const Label = ({slices}) => {
        return slices.map((slice,index)=>{
            const {pieCentroid, data} = slice
            return(
                <Text 
                    key={`label-${index}`}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill='#FFF'
                    textAnchor={"middle"}
                    alignmentBaseline={"middle"}
                    fontSize={22}
                >
                    {data.value}
                </Text>
            )
        })

    }
    return (
        <ScrollView>
        <C.Container>
            
            <C.Title>Meus Anúncios</C.Title>
            <C.MyAddArea>
                <PieChart 
                    style={{height: 300}}
                    data={pieData}
                >
                    <Label />
                </PieChart>

            <C.SubtitleArea>
                <C.Subtitle>
                    <C.Square color={'#282A3A'}/>
                    <C.SubtitleText>Anúncios ativados</C.SubtitleText> 
                </C.Subtitle>
                <C.Subtitle>
                    <C.Square color={'#C69749'}/>
                    <C.SubtitleText>Anúncios desativados</C.SubtitleText> 
                </C.Subtitle>
            </C.SubtitleArea>
            </C.MyAddArea>

            <C.Title>Minhas Visualizações</C.Title>
            <C.MyAddArea >
                <C.Graph style={{ flex: 1, flexDirection: 'row' }}>
            <YAxis
                    data={data2}
                    contentInset={contentInset}
                    svg={{
                        fill: '#FFF',
                        fontSize: 10,
                    }}
                    numberOfTicks={8}
                    formatLabel={(value) => `${value}`}
                    
                    

                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={data2}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={contentInset}
                    
                >
                    <Grid />
                </LineChart>
                </C.Graph>
                <C.Text>Total de Visualizações: {totalViews}</C.Text>
            </C.MyAddArea>

            <C.Title>Anúncio mais visto</C.Title>
            <C.MyAddArea>
                <C.ImageArea>
                <C.AddImage 
                    source={{uri: `http://192.168.1.105:5000/media/${img}`}}
                    resizeMode='contain'
                />
                </C.ImageArea>
                <C.Title>{mostViewitem.title}</C.Title>

                <C.ItemArea>
                    <C.Item>Preço: </C.Item>
                    <C.ItemValue>R$ {parseFloat(mostViewitem.price).toFixed(2)}</C.ItemValue>
                </C.ItemArea>

                <C.ItemArea>
                    <C.Item>Descrição: </C.Item>
                    <C.ItemValue>{mostViewitem.description}</C.ItemValue>
                </C.ItemArea>

                <C.ItemArea>
                    <C.Item>Visualizações: </C.Item>
                    <C.ItemValue>{mostViewitem.views}</C.ItemValue>
                </C.ItemArea>
            
            </C.MyAddArea>

            
        </C.Container>
        
        </ScrollView>
    )
}