import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={[styles.contianer]}>

        <View style={[styles.header]}>
          <View style={[styles.header_top]}>
            <View style={{ position: 'absolute', left: 10 }}>
              <Image style={{ width: 15, height: 15, marginLeft: 10 }} source={require('./image/icons8-back-50.png')} />
            </View>
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Cấu hình chấm công công ty</Text></View>
          <View style={[styles.header_bottom]}>
            <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
              <Text style={[styles.style_text]}>HÌNH THỨC</Text>
            </View>

            <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
              <Text style={[styles.style_text]}>THỜI GIAN</Text>
            </View>
          </View>
        </View>

        <ScrollView>

          <View style={[styles.content]}>
            <View>
              <Text style={[styles.gray_text, { marginTop: 20 }]}>Hình thức chấm công</Text>
            </View>

            <View style={[styles.icon_down, { alignItems: 'center' }]}>
              <Text style={[styles.black_text, { marginTop: 10 }]}>Chấm công bằng mạng Wifi và GPS</Text>
              <Image style={{ width: 10, height: 10, marginRight: 20 }} source={require('./image/sort-down.png')} />
            </View>

            <View>
              <Text style={[styles.gray_text, { marginTop: 25 }]}>THIẾT BỊ WIFI</Text>
            </View>

            <View style={[styles.view_ThietBi, { marginTop: 10 }]}>
              <View style={{ flex: 0.9, justifyContent: 'center' }}>
                <Text style={[styles.black_text]}>TP-Link13901</Text>
                <Text style={[styles.gray_text, { marginTop: 0, marginBottom: 10 }]}>00:11:22:33:44:55</Text>
              </View>
              <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('./image/icons8-more.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
              </View>
            </View>

            <View style={[styles.view_addThietBi]}>
              <View style={{ flex: 0.1, alignItems: 'center' }}>
                <Image source={require('./image/plus.png')} style={{ width: 20, height: 20 }} />
              </View>
              <View style={{ flex: 0.9 }}>
                <Text style={[styles.blue_text, { marginBottom: 15 }]}>THÊM THIẾT BỊ WIFI</Text>
              </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', marginTop: 10 }}>
              <Text style={[styles.gray_text, { marginTop: 10 }]}>ĐỊA ĐIỂM CHẤM CÔNG</Text>
            </View>

            <View style={[styles.view_ThietBi, { marginTop: 15 }]}>
              <View style={{ flex: 0.9, justifyContent: 'center' }}>
                <Text style={[styles.black_text, { fontSize: 14, fontWeight: 'bold' }]}>Văn phòng A26</Text>
                <Text style={[styles.gray_text, { marginBottom: 10 }]}>Tố Hữu, Vạn Phúc, Hà Đông, Hà Nội, Việt Nam</Text>
              </View>
              <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                < Image source={require('./image/icons8-more.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
              </View>
            </View>

            <View style={[styles.view_addThietBi, { borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#000' }]}>
              <View style={{ flex: 0.1, alignItems: 'center' }}>
                <Image source={require('./image/plus.png')} style={{ width: 20, height: 20 }} />
              </View>
              <View style={{ flex: 0.9 }}>
                <Text style={[styles.blue_text, { marginBottom: 15 }]}>THÊM ĐỊA ĐIỂM CHẤM CÔNG</Text>
              </View>
            </View>

            <View style={{ marginTop: 15 }} >
              <Text style={[styles.gray_text]}>Chế độ chấm công tính lương</Text>
            </View>

            <View style={[styles.icon_down, { alignItems: 'center', borderColor: '#ddd', borderBottomWidth: 1 }]}>
              <Text style={[styles.black_text, { marginTop: 10, marginBottom: 5 }]}>Ca kíp</Text>
              <Image style={{ width: 10, height: 10, marginRight: 20 }} source={require('./image/sort-down.png')} />
            </View>

            <View style={{ marginTop: 10 }}>
              <Text style={[styles.gray_text]}>Số lần chấm công trong ngày</Text>
            </View>

            <View style={{ flex: 1,marginLeft: 10,marginRight: 10, flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <View style = {[ styles.box]}>
                <Text style={[styles.black_text,]}>1 lần</Text>
              </View>
              
              <View style = {[ styles.box, {backgroundColor: '#0A9BDE'}]}>
                <Text style={[styles.black_text, { color: 'white'}]}>2 lần</Text>
              </View>

              <View style = {[ styles.box]}>
                <Text style={[styles.black_text,]}>3 lần</Text>
              </View>

              <View style = {[ styles.box]}>
                <Text style={[styles.black_text,]}>4 lần</Text>
              </View>
            </View>

            <View style = {{marginTop: 10}}>
              <Text style={[styles.gray_text]}>Cách tính công trong ngày</Text>
            </View>
            
            <View style = {{flexDirection : 'row'}}>
              <View style = {[styles.view_TinhCong]}>
                <View>
                  <Image source = {require('./image/full-moon.png')} style = {{width:20, height: 20}}/>
                </View>
                <View>
                  <Text style={[styles.black_text]}>Quy tròn</Text>
                </View>
              </View>

              <View style = {[styles.view_TinhCong]}>
                <View>
                  <Image source = {require('./image/full-moon-1.png')} style = {{width:20, height: 20}}/>
                </View>
                <View>
                  <Text style={[styles.black_text]}>Chính xác</Text>
                </View>
              </View>
            </View>

            <View>
              <Text style={[styles.gray_text , {marginTop: 15}]}>Số giờ làm việc tối thiểu để tính công</Text>
            </View>
            
            <View style={[styles.icon_down, { alignItems: 'center', borderColor: '#ddd', borderBottomWidth: 1 }]}>
              <Text style={[styles.black_text, { marginTop: 10, marginBottom: 5 }]}>8 giờ</Text>
              <Image style={{ width: 10, height: 10, marginRight: 20 }} source={require('./image/sort-down.png')} />
            </View>
            
            <View>
              <Text style={[styles.gray_text, {marginTop: 5}]}>Cho phép đi muộn về sớm</Text>
            </View>
            
            <View style={[styles.icon_down, { alignItems: 'center', borderColor: '#ddd', borderBottomWidth: 1 }]}>
              <Text style={[styles.black_text, { marginTop: 10, marginBottom: 5 }]}>5 phút</Text>
              <Image style={{ width: 10, height: 10, marginRight: 20 }} source={require('./image/sort-down.png')} />
            </View>

            <View style={[styles.icon_down,styles.view_Toggle]}>
              <Text style={[styles.black_text, { marginTop: 15,  marginBottom: 15, }]}>Kiểm soát đi muộn về sớm</Text>
              <Image style={{ width: 30, height: 30, marginRight: 20 }} source={require('./image/toggle-off.png')} />
            </View>
            
            <View style={[styles.icon_down, styles.view_Toggle]}>
              <Text style={[styles.black_text, { marginTop: 15, marginBottom: 15, }]}>Tự động checkout cuối giờ</Text>
              <Image style={{ width: 30, height: 30, marginRight: 20 }} source={require('./image/toggle-on.png')} />
            </View>
            
            <View style={[styles.icon_down, styles.view_Toggle, {borderBottomColor: 'gray'}]}>
              <Text style={[styles.black_text, { marginTop: 15 ,    marginBottom: 15,}]}>Kiểm soát các thiết bị chấm công</Text>
              <Image style={{ width: 30, height: 30, marginRight: 20 }} source={require('./image/toggle-on.png')} />
            </View>
            <View style = {{flex: 1, marginTop: 15, marginBottom:15}}>
              <View style = {{flex: 0.4,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={[styles.blue_text,{borderWidth: 1, borderColor: '#0A9BDE', borderRadius: 15, padding: 8, paddingLeft: 20, paddingRight: 20, fontWeight: 'bold'}]}>Lưu thông tin</Text>
              </View>
            </View>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flex: 1 / 6,
  },
  header_top: {
    flex: 1 / 2,
    flexDirection: 'row',
    backgroundColor: '#0A9BDE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header_bottom: {
    flex: 1 / 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#ddd',
    borderBottomWidth: 3,
    shadowColor: '#000'
  },
  style_text: {
    color: 'gray',
    fontSize: 13,
    textAlign: 'center'
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  gray_text: {
    color: 'gray',
    fontSize: 13,
    marginLeft: 10
  },
  blue_text: {
    color: '#0A9BDE',
    fontSize: 14,
    marginLeft: 10
  },
  black_text: {
    color: 'black',
    fontSize: 14,
    marginLeft: 10
  },
  icon_down: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between'
  },
  view_ThietBi: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: '#ddd',
    borderBottomWidth: 1
  },
  view_addThietBi: {
    flex: 1, 
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#000'
  },
  box: {
    flex: 1/4,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
  view_TinhCong: {
    flex: 1, 
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  view_Toggle: {
    alignItems: 'center' ,
    borderColor: '#ddd', 
    borderBottomWidth: 1,
    shadowOpacity: 0.5 
  },
});