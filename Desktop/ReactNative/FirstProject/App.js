import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

export default class App extends Component{
    render() {
        return(
            <View style = {[styles.container]}>
                <View style= {[styles.header, {marginBottom: 15}]}>
                    <View style = {{flex: 1/10}}>
                        <Image source = {require('./icons/ic_chevron_left.png') } style = {[styles.image_icons, {marginLeft: 13}]} />
                    </View>
                    <View style = {{flex: 9/10, alignItems: 'center'}}>
                        <Text style = {{color :'white', textAlign :'center', fontSize: 16}}>Hoàng Thu Trang</Text>
                    </View>
                </View>

                <View style = {[styles.content]}>
                    <View style = {{flex:1/15,marginBottom: 20,justifyContent: 'center', flexDirection: 'row', marginBottom: 10, alignItems: 'center'}}>
                        <View >
                            <Image source = {require('./icons/ic_today.png')} style = {[styles.image_icons, {marginRight: 10}]}/>
                        </View>
                        <View>
                            <Text style = {[styles.text_bold]}>Thứ 2, ngày 20/3/2018</Text>
                        </View>
                    </View>

                    <View style = {{flex: 1/15, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style = {{flex: 1/10, alignItems: 'center', justifyContent: 'center'}}>
                                <Image source = {require('./icons/Group7.1.png')} style = {[styles.image_icons]}/>
                            </View>
                            <View style = {{flex: 9/10, flexDirection: 'row', justifyContent: 'center'}}>
                                <View style = {{flex: 1/4, alignItems: 'center'}}>
                                    <Text style = {[styles.text_bold]}>18:30:00</Text>
                                </View>
                                <View style = {{flex: 3/4,justifyContent:'center'}}>
                                    <Text style = {[styles.gray_text]}>Ca làm việc kết thúc</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style = {{flex: 1/15,flexDirection: 'row', marginLeft: 13, marginRight: 13}}>
                        <View style = {[styles.view_border_left, {flex:1, flexDirection: 'row'}]}>
                            <View style = {{flex: 1, marginLeft: 20}}>
                                <View style ={[styles.view_border, {marginTop: 10, marginBottom: 20}]}></View>
                            </View>
                        </View>
                    </View>
                    

                    <View style = {{flex: 1/15, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style = {{flex: 1/10, alignItems: 'center', justifyContent: 'center'}}>
                                <Image source = {require('./icons/ring_red.png')} style = {[styles.image_icons]}/>
                            </View>
                            <View style = {{flex: 9/10, flexDirection: 'row', justifyContent: 'center'}}>
                                <View style = {{flex: 1/4, alignItems: 'center'}}>
                                    <Text style = {[styles.text_bold]}>18:30:00</Text>
                                </View>
                                <View style = {{flex: 2/4,justifyContent:'center'}}>
                                    <Text style = {[styles.gray_text]}>Checkout</Text>
                                </View>
                                <View style = {{flex: 1/4, justifyContent: 'center'}}>
                                    <Text style = {{color: 'white', fontSize: 10, borderWidth: 1, borderColor:'red',borderRadius:5, backgroundColor: 'red', padding:3, textAlign:'center'}}>SỚM 10M34S</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style = {{flex: 3/15,flexDirection: 'row', marginLeft: 13, marginRight: 13}}>
                        <View style = {[styles.view_border_left, {flex:1, flexDirection: 'row'}]}>
                            <View style = {{flex: 1, marginLeft: 20, flexDirection: 'column'}}>
                                <View style ={[styles.view_border, { marginBottom: 10}]}>
                                    <View style = {{flex: 1, justifyContent: 'center', alignItems:'center', borderWidth: 0.5, borderColor: '#ddd', backgroundColor: '#ddd',borderRadius: 4, marginBottom: 20}}>
                                        <View style = {{flex: 2/3, justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style = {[styles.gray_text, {padding: 6}]}>Tầng 19, tòa nha saigon center - thap 2, 67 lê lọi, phuong bến nghé, quận 1, tp Hồ chí minh</Text>
                                        </View>
                                        <View style = {{flex: 1/2, justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style = {{color: 'red', fontSize:10, padding: 6}}>Địa điểm không  hợp lệ, cần được admin xác nhận</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style = {{flex: 1/15, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style = {{flex: 1/10, alignItems: 'center', justifyContent: 'center'}}>
                                <Image source = {require('./icons/ring_green.png')} style = {[styles.image_icons]}/>
                            </View>
                            <View style = {{flex: 9/10, flexDirection: 'row', justifyContent: 'center'}}>
                                <View style = {{flex: 1/4, alignItems: 'center'}}>
                                    <Text style = {[styles.text_bold]}>18:30:00</Text>
                                </View>
                                <View style = {{flex: 3/4,justifyContent:'center'}}>
                                    <Text style = {[styles.gray_text]}>Checkin</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style = {{flex: 1/15,flexDirection: 'row', marginLeft: 14, marginRight: 13}}>
                        <View style = {[styles.view_border_left, {flex:1, flexDirection: 'row'}]}>
                            <View style = {{flex: 1, marginLeft: 20}}>
                                <View style ={[styles.view_border, {marginTop: 10, marginBottom: 20}]}></View>
                            </View>
                        </View>
                    </View>

                    <View style = {{flex: 1/15, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style = {{flex: 1/10, alignItems: 'center', justifyContent: 'center'}}>
                                <Image source = {require('./icons/ring_yellow.png')} style = {[styles.image_icons]}/>
                            </View>
                            <View style = {{flex: 9/10, flexDirection: 'row', justifyContent: 'center'}}>
                                <View style = {{flex: 1/4, alignItems: 'center'}}>
                                    <Text style = {[styles.text_bold]}>18:30:00</Text>
                                </View>
                                <View style = {{flex: 3/4,justifyContent:'center'}}>
                                    <Text style = {[styles.gray_text]}>Xin nghỉ 1h30p</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style = {{flex: 1/15,flexDirection: 'row', marginLeft: 14, marginRight: 13}}>
                        <View style = {[styles.view_border_left, {flex:1, flexDirection: 'row'}]}>
                            <View style = {{flex: 1, marginLeft: 20}}>
                                <View style ={[styles.view_border, {marginTop: 10, marginBottom: 20}]}></View>
                            </View>
                        </View>
                    </View>


                    <View style = {{flex: 1/15, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style = {{flex: 1/10, alignItems: 'center', justifyContent: 'center'}}>
                                <Image source = {require('./icons/ring_green.png')} style = {[styles.image_icons]}/>
                            </View>
                            <View style = {{flex: 9/10, flexDirection: 'row', justifyContent: 'center'}}>
                                <View style = {{flex: 1/4, alignItems: 'center'}}>
                                    <Text style = {[styles.text_bold]}>18:30:00</Text>
                                </View>
                                <View style = {{flex: 2/4,justifyContent:'center'}}>
                                    <Text style = {[styles.gray_text]}>Checkout</Text>
                                </View>
                                <View style = {{flex: 1/4, justifyContent: 'center'}}>
                                    <Text style = {{color: 'white', fontSize: 9, borderWidth: 1, borderColor:'#0f6',borderRadius:5, backgroundColor: '#0f6', padding:3, textAlign:'center'}}>SỚM 1H10M34S</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style = {{flex: 1/15,flexDirection: 'row', marginLeft: 14, marginRight: 13}}>
                        <View style = {[styles.view_border_left, {flex:1, flexDirection: 'row'}]}>
                            <View style = {{flex: 1, marginLeft: 20}}>
                                <View style ={[styles.view_border, {marginTop: 10, marginBottom: 20}]}></View>
                            </View>
                        </View>
                    </View>

                    <View style = {{flex: 1/15, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style = {{flex: 1/10, alignItems: 'center', justifyContent: 'center'}}>
                                <Image source = {require('./icons/ring_green.png')} style = {[styles.image_icons]}/>
                            </View>
                            <View style = {{flex: 9/10, flexDirection: 'row', justifyContent: 'center'}}>
                                <View style = {{flex: 1/4, alignItems: 'center'}}>
                                    <Text style = {[styles.text_bold]}>18:30:00</Text>
                                </View>
                                <View style = {{flex: 3/4,justifyContent:'center'}}>
                                    <Text style = {[styles.gray_text]}>Ca làm việc bắt đầu</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center'
    },
    header: {
        flex: 1/10, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#1E90FF',
    },
    content: {
        flex: 9/10, 
        flexDirection: 'column', 
        marginLeft: 13,
        marginRight: 13,
    },
    text_bold: {
        fontWeight: 'bold', 
        fontSize: 14
    },
    image_icons: {
        width: 12,
        height: 12,
    },
    box_text: {
       flex: 1/10,
       justifyContent: 'center',
       flexDirection: 'row',
       marginBottom: 10,
       alignItems: 'center'
    },
    box1_text: {
        flex: 2/9,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
     },
    gray_text: {
        color: '#888',
        fontSize: 12
    },
    view_border_left: {
        flex: 1,
        borderLeftWidth: 0.5,
        borderLeftColor: 'gray',
    },
    view_border: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },
});