import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Image, SectionList, Text, TouchableOpacity, View, Picker } from 'react-native'
import Icon from '../atom/icon'
import Fdicon from '../atom/icon';

// 引入页面
import dashboard_system from '../dashboard-system'
import data_collection from '../data-collection'
import eandon_system from '../eandon-system'
import esop_system from '../esop-system'
import quality_management from '../quality-management'
import reporting_system from '../reporting-system'

// tslint:disable-next-line: variable-name
const Stack = createStackNavigator();

export default () => {
	const navigation = useNavigation();
	const [focused_index, setFocused_index] = useState(0);

	const menus = [
		{
			title: 'menus',
			data: [{
				name: 'ESOP',
				path: 'esop_system',
				backgroundColor: '#fff',
				color: '#fff',
				icon: 'propertysafety',
				icon_focused: 'property-safety',
				focused: true
			}, {
				name: '安灯系统',
				path: 'eandon_system',
				backgroundColor: '#fff',
				color: '#fff',
				icon: 'dengpao',
				icon_focused: 'dengpao1',
				focused: false
			}, {
				name: '数据采录',
				path: 'data_collection',
				backgroundColor: '#fff',
				color: '#fff',
				icon: 'wenbenbianji',
				icon_focused: 'wenbenbianjitianchong',
				focused: false
			}, {
				name: '品质管理',
				path: 'quality_management',
				backgroundColor: '#fff',
				color: '#fff',
				icon: 'pinzhi',
				icon_focused: 'yiliaozhiliangfenxi',
				focused: false
			}, {
				name: '看板系统',
				path: 'dashboard_system',
				backgroundColor: '#fff',
				color: '#fff',
				icon: 'jiankongmianban',
				icon_focused: 'jiankongmianban-mianxing',
				focused: false
			}, {
				name: '报表系统',
				path: 'reporting_system',
				backgroundColor: '#fff',
				color: '#fff',
				icon: 'tubiao',
				icon_focused: 'tubiao1',
				focused: false
			}]
		}
	]
	return (
		<View style={{ flex: 1, flexDirection: 'row' }}>
			<View style={{ flex: 0.1, backgroundColor: '#448AFF', alignItems: 'center' }}>
				<SectionList
					keyExtractor={(item) => {
						return item.path
					}}
					renderSectionHeader={({ section: { title } }) => (
						<TouchableOpacity style={{ height: 80, alignItems: 'center', justifyContent: 'flex-end' }}>
							{/* 头像 */}
							<View style={{ alignItems: 'center' }}>
								<Image source={require('../../imgs/science5.png')} style={{ width: 60, height: 60, borderRadius: 30 }} />
							</View>
						</TouchableOpacity>
					)}
					renderItem={({ item, index }) => {
						return (
							<TouchableOpacity style={{ width: 120, paddingTop: 20, paddingBottom: 20 }} onPress={
								() => {
									setFocused_index(index)
									navigation.navigate(item.path)
								}}>
								<View style={{ alignItems: 'center', justifyContent: 'center' }}>
									<Icon style={{ alignContent: 'center' }} name={(() => {
										if (index === focused_index) {
											return item.icon_focused
										} else {
											return item.icon
										}
									})()} size={35} color={item.color}></Icon>
									<Text style={{ marginTop: 5, fontSize: 12, color: item.color }}>{item.name}</Text>
								</View>
							</TouchableOpacity>
						);
					}}
					sections={menus}
				/>
			</View>
			<View style={{ flex: 0.9, backgroundColor: 'red' }}>
				<View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', flexWrap: 'wrap' }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ height: 35, lineHeight: 35, textAlign: 'right', width: 100 }}>终端代码名称:</Text>
						<Text style={{ height: 35, lineHeight: 35 }}>测试终端代码名称</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ height: 35, lineHeight: 35, textAlign: 'right', width: 100 }}>工序代码名称:</Text>
						<Text style={{ height: 35, lineHeight: 35 }}>测试终端代码名称</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ height: 35, lineHeight: 35, textAlign: 'right', width: 100 }}>员工编号:</Text>
						<Text style={{ height: 35, lineHeight: 35 }}>测试终端代码名称</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ height: 35, lineHeight: 35, textAlign: 'right', width: 100 }}>员工名称:</Text>
						<Text style={{ height: 35, lineHeight: 35 }}>测试终端代码名称</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ height: 35, lineHeight: 35, textAlign: 'right', width: 100 }}>所属设备:</Text>
						<Picker
							style={{ height: 35, width: 100 }} >
							<Picker.Item label="java" value="java" />
							<Picker.Item label="JavaScript" value="js" />
						</Picker>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ height: 35, lineHeight: 35, textAlign: 'right', width: 100 }}><Fdicon name='xiaoxi1' size={18} color='red'></Fdicon>消息:</Text>
						<Text style={{ height: 35, lineHeight: 35 }}>测试终端代码名称</Text>
					</View>
				</View>
				<Stack.Navigator initialRouteName='esop_system' screenOptions={{
					animationEnabled: false
				}}>
					<Stack.Screen name='esop_system' component={esop_system} />
					<Stack.Screen name='eandon_system' component={eandon_system} />
					<Stack.Screen name='data_collection' component={data_collection} />
					<Stack.Screen name='quality_management' component={quality_management} />
					<Stack.Screen name='dashboard_system' component={dashboard_system} />
					<Stack.Screen name='reporting_system' component={reporting_system} />
				</Stack.Navigator>
			</View>
		</View >
	);
}
