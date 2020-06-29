import { createIconSet } from 'react-native-vector-icons';
const glyphMap = {
	"jianpan": 59314,
	"baojing": 58999,
	"wushuju": 59216,
	"xiangqing": 58925,
	"guanbi": 59083,
	"xiaoxi": 59022,
	"zuoyou": 58880,
	"xiaoxi1": 58953,
	"zuo": 58881,
	"qia": 58930,
	"zhiwen": 59001,
	"nfc-": 58902,
	"nfc-1": 58903,
	"qia1": 58929,
	"shuaqia": 58891,
	"NFCshibie": 58950,
	"ID": 59099,
	"id1": 58927,
	"zhiwen-xianxing": 59378,
	"dengpao": 58897,
	"dengpao1": 59053,
	"wenbenbianjitianchong": 59092,
	"wenbenbianji": 59093,
	"shezhi2": 58907,
	"yiliaozhiliangfenxi": 59013,
	"tubiao1": 58899,
	"tubiao": 58995,
	"property-safety": 59138,
	"shezhi1": 58900,
	"jiankongmianban": 58928,
	"jiankongmianban-mianxing": 58978,
	"pinzhi": 58932,
	"propertysafety": 58988
};

const iconSet = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;
