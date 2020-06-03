// import { Picker } from '@react-native-community/picker'
import React from 'react';
import { Image, Modal, Picker, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default () => {
	return (
		<ScrollView>
			{/* <View style={{ flexDirection: 'row', flex: 1, backgroundColor: '#fff', minHeight: 200, paddingTop: 20 }}>
				<View style={{ flex: 0.25, borderRightWidth: 0.5, borderColor: '#e2e1de' }}>
					<View style={{
						height: 45, backgroundColor: '#fff', marginBottom: 20
					}}>
						<Text style={{ lineHeight: 45, textAlign: 'center', fontSize: 18 }}>报警代码列表</Text>
					</View>
					<View>
						<View style={{ height: 45, borderWidth: 1, borderRadius: 10, borderColor: '#e2e1de', backgroundColor: '#fff', width: '80%', marginLeft: '10%' }}>
							<Text style={{ lineHeight: 45, textAlign: 'center', fontSize: 16 }}>安灯报警代码</Text>
						</View>
					</View>
				</View>
				<View style={{ flex: 0.75, paddingLeft: 10, paddingRight: 10 }}>
					<View style={{ height: 45, backgroundColor: '#fff', marginBottom: 20 }}><Text style={{ lineHeight: 45, textAlign: 'center', fontSize: 18 }}>报警代码详情</Text></View>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
						<View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 120, width: '25%' }}>
							<View style={{ height: 70, width: 120 }}>
								<Image source={require('../../imgs/science5.png')} style={{ borderRadius: 5, width: '100%', height: 70 }} />
							</View>
							<Text style={{ height: 30, lineHeight: 30, textAlign: 'center', fontSize: 16 }}>水泵是否正常</Text>
						</View>
						<View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 120, width: '25%' }}>
							<View style={{ height: 70, width: 120 }}>
								<Image source={require('../../imgs/science5.png')} style={{ borderRadius: 5, width: '100%', height: 70 }} />
							</View>
							<Text style={{ height: 30, lineHeight: 30, textAlign: 'center', fontSize: 16 }}>水泵是否正常</Text>
						</View>
						<View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 120, width: '25%' }}>
							<View style={{ height: 70, width: 120 }}>
								<Image source={require('../../imgs/science5.png')} style={{ borderRadius: 5, width: '100%', height: 70 }} />
							</View>
							<Text style={{ height: 30, lineHeight: 30, textAlign: 'center', fontSize: 16 }}>水泵是否正常</Text>
						</View>
						<View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 120, width: '25%' }}>
							<View style={{ height: 70, width: 120 }}>
								<Image source={require('../../imgs/science5.png')} style={{ borderRadius: 5, width: '100%', height: 70 }} />
							</View>
							<Text style={{ height: 30, lineHeight: 30, textAlign: 'center', fontSize: 16 }}>水泵是否正常</Text>
						</View>
					</View>
				</View>
			</View> */}
			{/* 全展示效果 */}
			<View style={{ flex: 1, paddingLeft: 10, paddingRight: 10, backgroundColor: '#fff', paddingTop: 20 }}>
				<View style={{ height: 45, backgroundColor: '#fff', marginBottom: 20 }}><Text style={{ lineHeight: 45, textAlign: 'center', fontSize: 18 }}>报警代码详情</Text></View>
				<View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
					<View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 120, width: '20%' }}>
						<View style={{ height: 70, width: 120 }}>
							<Image source={require('../../imgs/science5.png')} style={{ borderRadius: 5, width: '100%', height: 70 }} />
						</View>
						<Text style={{ height: 30, lineHeight: 30, textAlign: 'center', fontSize: 16 }}>水泵是否正常</Text>
					</View>
					<View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 120, width: '20%' }}>
						<View style={{ height: 70, width: 120 }}>
							<Image source={require('../../imgs/science5.png')} style={{ borderRadius: 5, width: '100%', height: 70 }} />
						</View>
						<Text style={{ height: 30, lineHeight: 30, textAlign: 'center', fontSize: 16 }}>水泵是否正常</Text>
					</View>
					<View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 120, width: '20%' }}>
						<View style={{ height: 70, width: 120 }}>
							<Image source={require('../../imgs/science5.png')} style={{ borderRadius: 5, width: '100%', height: 70 }} />
						</View>
						<Text style={{ height: 30, lineHeight: 30, textAlign: 'center', fontSize: 16 }}>水泵是否正常</Text>
					</View>
					<View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 120, width: '20%' }}>
						<View style={{ height: 70, width: 120 }}>
							<Image source={require('../../imgs/science5.png')} style={{ borderRadius: 5, width: '100%', height: 70 }} />
						</View>
						<Text style={{ height: 30, lineHeight: 30, textAlign: 'center', fontSize: 16 }}>水泵是否正常</Text>
					</View>
					<View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 120, width: '20%' }}>
						<View style={{ height: 70, width: 120 }}>
							<Image source={require('../../imgs/science5.png')} style={{ borderRadius: 5, width: '100%', height: 70 }} />
						</View>
						<Text style={{ height: 30, lineHeight: 30, textAlign: 'center', fontSize: 16 }}>水泵是否正常</Text>
					</View>
					<View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 120, width: '20%' }}>
						<View style={{ height: 70, width: 120 }}>
							<Image source={require('../../imgs/science5.png')} style={{ borderRadius: 5, width: '100%', height: 70 }} />
						</View>
						<Text style={{ height: 30, lineHeight: 30, textAlign: 'center', fontSize: 16 }}>水泵是否正常</Text>
					</View>
					<View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 120, width: '20%' }}>
						<View style={{ height: 70, width: 120 }}>
							<Image source={require('../../imgs/science5.png')} style={{ borderRadius: 5, width: '100%', height: 70 }} />
						</View>
						<Text style={{ height: 30, lineHeight: 30, textAlign: 'center', fontSize: 16 }}>水泵是否正常</Text>
					</View>
					<View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 120, width: '20%' }}>
						<View style={{ height: 70, width: 120 }}>
							<Image source={require('../../imgs/science5.png')} style={{ borderRadius: 5, width: '100%', height: 70 }} />
						</View>
						<Text style={{ height: 30, lineHeight: 30, textAlign: 'center', fontSize: 16 }}>水泵是否正常</Text>
					</View>
				</View>
			</View>
			{/* 筛选 start */}
			{(() => {
				if (0) {
					return (
						<Modal transparent={true}>
							<TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.3)', top: 0, bottom: 0, left: 0, right: 0, position: 'absolute' }} activeOpacity={1}>
								<View style={{ backgroundColor: 'rgba(0,0,0,.3)', top: 0, bottom: 0, left: 0, right: 0, position: 'absolute', justifyContent: 'center' }}>
									<View style={{ margin: 50, backgroundColor: '#fff', borderRadius: 5 }}>
										<View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
											<Text style={{ fontSize: 16, color: '#333333', textAlign: 'center', lineHeight: 80 }}>可用设备代码：</Text>
											<Picker
												style={{ height: 35, width: 100 }} >
												<Picker.Item label="java" value="java" />
												<Picker.Item label="JavaScript" value="js" />
											</Picker>
										</View>
										<View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#f2f2f2' }}>
											<TouchableOpacity style={{ borderBottomLeftRadius: 5, height: 40, flex: 1 }}>
												<Text style={{ fontSize: 16, textAlign: 'center', lineHeight: 40, color: '#333' }}>取消</Text>
											</TouchableOpacity>
											<TouchableOpacity style={{ borderBottomRightRadius: 5, backgroundColor: '#0099ff', height: 40, flex: 1 }}>
												<Text style={{ fontSize: 16, color: '#fff', textAlign: 'center', lineHeight: 40 }}>提交</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</TouchableOpacity>
						</Modal>
					);
				}
			})()}
			{/* 筛选 end */}
		</ScrollView>

	);
}
