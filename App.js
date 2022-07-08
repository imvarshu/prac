
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View,ScrollView,RefreshControl,FlatList,SectionList } from 'react-native';



export default function App() {
    const [counter, setCounter] = useState(0);
    const [titles, setTitles] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() =>{
         setCounter(1);
        setTitles([]);
    }, [])

    useEffect(() => {
        if(counter > 0){
            const title = {
                title: `Title ${counter}`,
                data: [ `Item ${counter}.1`, `Item ${counter}.2` ],
            }
            const newTitles = [...titles];
            newTitles.push(title)
            setTitles(newTitles);
            setRefreshing(false);
        }
    }, [counter]);

    const onRefresh = () => {
        setRefreshing(true);
        setCounter(counter => counter + 1);
    }


  return (
    <SectionList
        keyExtractor={(item,index) =>index.toString()}
        sections={titles}
        renderItem= {({item}) => (<View><Text style={{textAlign:'center',fontSize:20}}>{item}</Text></View>)} 
        renderSectionHeader= {({section}) => (
            <View style = {{backgroundColor:'#0AF0F2', width:100, height:70,alignItems:'center', justifyContent:'center', margin:10}}>
                <Text style={{textAlign:'center',fontSize:20}}>{section.title}</Text>
            </View>
        )}
        refreshControl={
            <RefreshControl
            refreshing = {refreshing}
            onRefresh = {onRefresh}
        
            />
            }
    />
  ) 
}


