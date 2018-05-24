import React , { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TextInput
} from 'react-native'

export default class test2 extends Component{
    render() {

        return(
            <View style = {[styles.container]}>
                <View style = {[styles.header]}>
                    <View style = {[styles.headre1]}>
                        <View style = {{flex: 1/10}}>
                            <Image source = {require('./icons/ic_chevron_left.png')} style = {{width: 10, height: 10}}/>
                        </View>
                        <View style = {{flex: 4/5, alignItems: 'center'}}>
                            <Text style = {{color: 'white', fontSize: 16}}>Bảng chấm công</Text>
                        </View>
                        <View style = {{flex: 1/10, alignItems: 'center'}}>
                            <Image source = {require('./icons/ic_person_add.png')} style = {{width: 15, height: 15}} />
                        </View>
                    </View>
                    <View style = {[styles.headre1]}>
                        <View style = {[styles.view_textInput]}>
                            <View style = {{flex: 3/4}}>
                                <Text style = {{fontSize: 12, color: 'white', opacity: 0.5}}>Tìm kiếm nhân viên</Text>
                            </View>
                            <View style = {{flex: 1/4, alignItems: 'center'}}>
                                <Image  source = {require('./icons/search.png')} style = {{width: 20, height: 20, opacity: 0.5}} />
                            </View>
                        </View>
                        <View style = {[styles.box_Phong]}>
                            <View style = {{flex: 3/4}}>
                                <Text style = {{color: 'white', fontSize: 12}}>Phòng IT</Text>
                            </View>
                            <View style = {{flex: 1/4, alignItems: 'center'}}> 
                                <Image source = {require('./icons/dropdown.png')} style = {{width: 20, height: 20, opacity: 0.5}}/>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style = {styles.content}>
                        <View style = {{flex: 1/10, flexDirection: 'row',}}>
                            <View style = {{flex: 2/3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRightWidth: 0.4, borderRightColor: 'grey', padding: 10}}>
                                <View style = {{flex: 1/4, alignItems: 'center'}}>
                                    <Image source = {require('./icons/Group9.png')} style = {{width: 20, height: 20}}/>
                                </View>
                                <View style = {{flex : 1/2, alignItems: 'center'}}>
                                    <Text style = {{fontSize: 14, fontWeight: 'bold', color: 'black'}}>Tháng 3/2018</Text>
                                </View>
                                <View style = {{flex: 1/4, alignItems: 'center'}}>
                                    <Image source = {require('./icons/Group9_1.png')} style = {{width: 20, height: 20}} />
                                </View>
                            </View>
                            <View style = {{flex: 1/3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10}}>
                                <View style = {{flex: 1/3, alignItems: 'center'}}>
                                    <Image  source = {require('./icons/ic_open_in_new.png')} style = {{width: 13, height: 13}}/>
                                </View>
                                <View style = {{flex: 2/3, alignItems: 'center'}}>
                                    <Text style = {{color: '#1E90FF', fontSize: 12}}>XUẤT FILE</Text>
                                </View>
                            </View>
                        </View>
                        <View style = {[styles.box]}>
                            <View style = {{flex: 1/10, alignItems: 'center'}}>
                                <Text style = {{fontSize: 10}}>1</Text>
                            </View>
                            <View style = {{flex: 4/5, flexDirection: 'column'}}>
                                <View style = {{flex: 1/2}}>
                                    <Text style = {{fontSize: 12, fontWeight: 'bold',color: 'black'}}>Nguyễn Văn Hùng</Text>
                                </View>
                                <View style = {{flex: 1/10, flexDirection: 'row', marginBottom: 10}}>
                                    <View style = {{flex: 1/2, justifyContent: 'center', borderRightWidth: 0.2, borderRightColor: 'gray', shadowOpacity: 0.1}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>MNV: 0984194</Text>
                                    </View>
                                    <View style = {{flex: 1/2, alignItems: 'center'}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>Phòng kinh doanh</Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {{flex: 1/10}}>
                                <Image source = {require('./icons/Group9_1.png')} style = {{width: 20, height: 20}} />
                            </View>
                        </View>

                        <View style = {[styles.box]}>
                            <View style = {{flex: 1/10, alignItems: 'center'}}>
                                <Text  style = {{fontSize: 10}}>2</Text>
                            </View>
                            <View style = {{flex: 4/5, flexDirection: 'column'}}>
                                <View style = {{flex: 1/2}}>
                                    <Text style = {{fontSize: 12, fontWeight: 'bold',color: 'black'}}>Hoàng Thu Trang</Text>
                                </View>
                                <View style = {{flex: 1/10, flexDirection: 'row', marginBottom: 10}}>
                                    <View style = {{flex: 1/2, justifyContent: 'center', borderRightWidth: 0.2, borderRightColor: 'gray', shadowOpacity: 0.1}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>MNV: 0984194</Text>
                                    </View>
                                    <View style = {{flex: 1/2, alignItems: 'center'}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>Phòng kinh doanh</Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {{flex: 1/10}}>
                                <Image source = {require('./icons/Group9_1.png')} style = {{width: 20, height: 20}} />
                            </View>
                        </View>

                        <View style = {[styles.box]}>
                            <View style = {{flex: 1/10, alignItems: 'center'}}>
                                <Text  style = {{fontSize: 10}}>3</Text>
                            </View>
                            <View style = {{flex: 4/5, flexDirection: 'column'}}>
                                <View style = {{flex: 1/2}}>
                                    <Text style = {{fontSize: 12, fontWeight: 'bold',color: 'black'}}>Lê Thùy Linh</Text>
                                </View>
                                <View style = {{flex: 1/10, flexDirection: 'row', marginBottom: 10}}>
                                    <View style = {{flex: 1/2, justifyContent: 'center', borderRightWidth: 0.2, borderRightColor: 'gray', shadowOpacity: 0.1}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>MNV: 0984194</Text>
                                    </View>
                                    <View style = {{flex: 1/2, alignItems: 'center'}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>Phòng kinh doanh</Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {{flex: 1/10}}>
                                <Image source = {require('./icons/Group9_1.png')} style = {{width: 20, height: 20}} />
                            </View>
                        </View>

                        <View style = {[styles.box]}>
                            <View style = {{flex: 1/10, alignItems: 'center'}}>
                                <Text  style = {{fontSize: 10}}>4</Text>
                            </View>
                            <View style = {{flex: 4/5, flexDirection: 'column'}}>
                                <View style = {{flex: 1/2}}>
                                    <Text style = {{fontSize: 12, fontWeight: 'bold',color: 'black'}}>Nguyễn Thị Hương</Text>
                                </View>
                                <View style = {{flex: 1/10, flexDirection: 'row', marginBottom: 10}}>
                                    <View style = {{flex: 1/2, justifyContent: 'center', borderRightWidth: 0.2, borderRightColor: 'gray', shadowOpacity: 0.1}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>MNV: 0984194</Text>
                                    </View>
                                    <View style = {{flex: 1/2, alignItems: 'center'}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>Phòng kinh doanh</Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {{flex: 1/10}}>
                                <Image source = {require('./icons/Group9_1.png')} style = {{width: 20, height: 20}} />
                            </View>
                        </View>

                        <View style = {[styles.box]}>
                            <View style = {{flex: 1/10, alignItems: 'center'}}>
                                <Text  style = {{fontSize: 10}}>5</Text>
                            </View>
                            <View style = {{flex: 4/5, flexDirection: 'column'}}>
                                <View style = {{flex: 1/2}}>
                                    <Text style = {{fontSize: 12, fontWeight: 'bold',color: 'black'}}>Nguyễn Văn Hùng</Text>
                                </View>
                                <View style = {{flex: 1/10, flexDirection: 'row', marginBottom: 10}}>
                                    <View style = {{flex: 1/2, justifyContent: 'center', borderRightWidth: 0.2, borderRightColor: 'gray', shadowOpacity: 0.1}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>MNV: 0984194</Text>
                                    </View>
                                    <View style = {{flex: 1/2, alignItems: 'center'}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>Phòng kinh doanh</Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {{flex: 1/10}}>
                                <Image source = {require('./icons/Group9_1.png')} style = {{width: 20, height: 20}} />
                            </View>
                        </View>

                        <View style = {[styles.box]}>
                            <View style = {{flex: 1/10, alignItems: 'center'}}>
                                <Text  style = {{fontSize: 10}}>6</Text>
                            </View>
                            <View style = {{flex: 4/5, flexDirection: 'column'}}>
                                <View style = {{flex: 1/2}}>
                                    <Text style = {{fontSize: 12, fontWeight: 'bold',color: 'black'}}>Hoàng Thu Trang</Text>
                                </View>
                                <View style = {{flex: 1/10, flexDirection: 'row', marginBottom: 10}}>
                                    <View style = {{flex: 1/2, justifyContent: 'center', borderRightWidth: 0.2, borderRightColor: 'gray', shadowOpacity: 0.1}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>MNV: 0984194</Text>
                                    </View>
                                    <View style = {{flex: 1/2, alignItems: 'center'}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>Phòng kinh doanh</Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {{flex: 1/10}}>
                                <Image source = {require('./icons/Group9_1.png')} style = {{width: 20, height: 20}} />
                            </View>
                        </View>

                        <View style = {[styles.box]}>
                            <View style = {{flex: 1/10, alignItems: 'center'}}>
                                <Text  style = {{fontSize: 10}}>7</Text>
                            </View>
                            <View style = {{flex: 4/5, flexDirection: 'column'}}>
                                <View style = {{flex: 1/2}}>
                                    <Text style = {{fontSize: 12, fontWeight: 'bold',color: 'black'}}>Lê Thùy Linh</Text>
                                </View>
                                <View style = {{flex: 1/10, flexDirection: 'row', marginBottom: 10}}>
                                    <View style = {{flex: 1/2, justifyContent: 'center', borderRightWidth: 0.2, borderRightColor: 'gray', shadowOpacity: 0.1}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>MNV: 0984194</Text>
                                    </View>
                                    <View style = {{flex: 1/2, alignItems: 'center'}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>Phòng kinh doanh</Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {{flex: 1/10}}>
                                <Image source = {require('./icons/Group9_1.png')} style = {{width: 20, height: 20}} />
                            </View>
                        </View>

                        <View style = {{flexDirection: 'row', justifyContent: 'center',alignItems: 'center', marginTop: 10}}>
                            <View style = {{flex: 1/10, alignItems: 'center'}}>
                                <Text  style = {{fontSize: 10}}>8</Text>
                            </View>
                            <View style = {{flex: 4/5, flexDirection: 'column'}}>
                                <View style = {{flex: 1/2}}>
                                    <Text style = {{fontSize: 12, fontWeight: 'bold',color: 'black'}}>Nguyễn Thị Hương</Text>
                                </View>
                                <View style = {{flex: 1/10, flexDirection: 'row', marginBottom: 10}}>
                                    <View style = {{flex: 1/2, justifyContent: 'center', borderRightWidth: 0.2, borderRightColor: 'gray', shadowOpacity: 0.1}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>MNV: 0984194</Text>
                                    </View>
                                    <View style = {{flex: 1/2, alignItems: 'center'}}>
                                        <Text style = {{fontSize: 10, opacity: 0.6}}>Phòng kinh doanh</Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {{flex: 1/10}}>
                                <Image source = {require('./icons/Group9_1.png')} style = {{width: 20, height: 20}} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: 1/6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
    },
    headre1: {
        flex: 1/2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 7,
        marginRight: 7
    },
    view_textInput: {
        flex: 3/5,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1, 
        borderColor: '#4682B4', 
        borderRadius: 5, 
        padding: 6, 
        marginRight: 5,
        backgroundColor: '#4682B4'
    },
    box_Phong: {
        flex: 2/5, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderWidth: 1, 
        borderColor: '#4682B4', 
        borderRadius: 5, 
        padding: 6, 
        backgroundColor: '#4682B4'
    },
    content: {
        flex: 1,
        flexDirection: 'column',
    },
    box: {
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center', 
        borderBottomWidth: 1, 
        borderBottomColor: 'gray', 
        marginTop: 10,
    },
});