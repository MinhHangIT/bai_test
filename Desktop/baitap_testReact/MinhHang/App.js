import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import flatListData from './data/dataBase';

class FlatListItem extends Component{
    render(){
        return(
            <View style = {{flex: 1, flexDirection: 'row', margin: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
                <View style = {{marginRight: 10}}>
                    <Image source = {{uri: this.props.item.url}} style = {{width: 50, height: 50}} />
                </View>
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <Text style = {{fontSize: 13}}>album: {this.props.item.albumId}</Text>
                    <Text style = {{fontSize: 13}}>{this.props.item.title}</Text>
                </View>
            </View>
        );
    }
}



export default class App extends Component {
    render(){
        return(
            <View style = {{flex: 1}}>
                <FlatList 
                    data = {flatListData}
                  
                    renderItem = {({item,index}) => {
                    return(
                        <FlatListItem  item = {item} index = {index}>

                        </FlatListItem>);
                    }}
                >
                </FlatList>
            </View>
        );
    }
}