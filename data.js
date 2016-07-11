
<!--首页的数据包括图片和文字-->
index = {
	picArr:[//焦点图片的路径：
			["img/index/013.jpg", "img/index/014.jpg", "img/index/011.jpg"],
			["img/index/093.jpg","img/index/091.jpg", "img/index/094.jpg"],
			["img/index/072.jpg", "img/index/073.jpg", "img/index/074.jpg"],
			["img/index/041.jpg", "img/index/044.jpg", "img/index/043.jpg"],
			["global_tm.gif", "global_tm.gif", "global_tm.gif"]],	
	//用户共享， 我的相册，我的收藏， 在线图库,，用户设置
	
	itemFocusPic:["icn_set1.png","icn_gx1.png", "icn_photo1.png", "icn_shouc1.png", "icn_zxtk1.png"],//用户设置，用户共享， 我的相册，我的收藏， 在线图库, （注意跟图片可不是对应）
	itemNoFocusPic:["icn_set0.png","icn_gx0.png", "icn_photo0.png", "icn_shouc0.png","icn_zxtk0.png" ],//无焦点的条目
	
	textInfo: [			a						//焦点上的文字内容
		["靓丽冰冰", "魅力影星", "演艺才子"],
		["高空抢修", "服务大众", "OCN图片演示"],
		["冬日雾凇", "山水相连", "貌似狮子"],
		["城堡式的建筑", "宁静小屋", "雪山下的房屋"],
		["", "", ""]
	],
	url:[
		["picPlay_2.htm?0?34", "picPlay_2.htm?0?9", "picPlay_2.htm?0?10"],	//用户共享
		["picPlay_0.htm?0?7","picPlay_0.htm?0?31", "picPlay_0.htm?0?38"],	//我的相册
		["picPlay.htm?3", "picPlay.htm?17", "picPlay.htm?22"],	//我的收藏
		["picPlay_1.htm?2?21", "picPlay_1.htm?0?29", "picPlay_1.htm?0?14"]	//在线图库
	]
};

<!--我的相册－旋转模式-->
view_3d = [{"name":"","type":203,"src":"img/00_banner_1.jpg"},{"name":"","type":204,"src":"img/00_banner_2.jpg"},{"name":"","type":205,"src":"img/00_banner_3.jpg"}];

/*[		//改变它的名称和图片的路径
			    {name:"可爱宝贝",src:"img/index/091.jpg",type:1},
				{name:"影视海报",src:"img/index/062.jpg",type:1},
				{name:"城市掠影",src:"img/index/013.jpg",type:1},
				{name:"多彩生活",src:"img/index/081.jpg",type:0},
				{name:"有线之窗",src:"img/index/021.jpg",type:0}
			];
*/
<!--<photoData property=""/>-->
<!--我的相册－视图模式-->
viewMode = {info:[//
	{name:"野外郊游", time:"2009.12.09"},//09
	{name:"影视看点", time:"2010.01.22"},//06
	{name:"靓丽明星", time:"2009.11.03"},//01
	{name:"游山玩水", time:"2010.01.04"},//08
	{name:"名车欣赏", time:"2010.03.15"},//02
	{name:"世界风光", time:"2009.06.06"}//04
	],
	picArr: [
	   ["img/index/091.jpg", "img/index/092.jpg", "img/index/093.jpg", "img/index/094.jpg"],
	   ["img/index/061.jpg", "img/index/062.jpg", "img/index/063.jpg", "img/index/064.jpg"],
	   ["img/index/011.jpg", "img/index/012.jpg", "img/index/013.jpg", "img/index/014.jpg"],
	   ["img/index/081.jpg", "img/index/082.jpg", "img/index/083.jpg", "img/index/081.jpg"],
	   ["img/index/021.jpg", "img/index/022.jpg", "img/index/023.jpg", "img/index/024.jpg"],
	   ["img/index/041.jpg", "img/index/042.jpg", "img/index/043.jpg", "img/index/044.jpg"]
	]
};
<!--我的相册－内容-->
//大图显示有问题@！！！！！！！！！！！！！！！！！！！

/*
receive_0 =[
{	//"野外郊游"09
	Big:
		[
			 "img/big/09/000.jpg","img/big/09/001.jpg",
			 "img/big/09/002.jpg","img/big/09/003.jpg",
			 "img/big/09/004.jpg","img/big/09/005.jpg",
			 "img/big/09/006.jpg","img/big/09/007.jpg",
			 "img/big/09/008.jpg","img/big/09/009.jpg",
			 "img/big/09/010.jpg","img/big/09/011.jpg",
			 "img/big/09/012.jpg","img/big/09/013.jpg",
			 "img/big/09/014.jpg","img/big/09/015.jpg",
			 "img/big/09/016.jpg","img/big/09/017.jpg",
			 "img/big/09/018.jpg","img/big/09/019.jpg",
			 "img/big/09/020.jpg","img/big/09/021.jpg",
			 "img/big/09/022.jpg","img/big/09/023.jpg",
			 "img/big/09/024.jpg","img/big/09/025.jpg",
			 "img/big/09/026.jpg","img/big/09/027.jpg",
			 "img/big/09/028.jpg","img/big/09/029.jpg",
			 "img/big/09/030.jpg","img/big/09/031.jpg",
			 "img/big/09/032.jpg","img/big/09/033.jpg",
			 "img/big/09/034.jpg","img/big/09/035.jpg",
			 "img/big/09/036.jpg","img/big/09/037.jpg",
			 "img/big/09/038.jpg","img/big/09/039.jpg"
	
			 
	],
	Small:
		[
			 "img/small/09/000.jpg","img/small/09/001.jpg",
			 "img/small/09/002.jpg","img/small/09/003.jpg",
			 "img/small/09/004.jpg","img/small/09/005.jpg",
			 "img/small/09/006.jpg","img/small/09/007.jpg",
			 "img/small/09/008.jpg","img/small/09/009.jpg",
			 "img/small/09/010.jpg","img/small/09/011.jpg",
			 "img/small/09/012.jpg","img/small/09/013.jpg",
			 "img/small/09/014.jpg","img/small/09/015.jpg",
			 "img/small/09/016.jpg","img/small/09/017.jpg",
			 "img/small/09/018.jpg","img/small/09/019.jpg",
			 "img/small/09/020.jpg","img/small/09/021.jpg",
			 "img/small/09/022.jpg","img/small/09/023.jpg",
			 "img/small/09/024.jpg","img/small/09/025.jpg",
			 "img/small/09/026.jpg","img/small/09/027.jpg",
			 "img/small/09/028.jpg","img/small/09/029.jpg",
			 "img/small/09/030.jpg","img/small/09/031.jpg",
			 "img/small/09/032.jpg","img/small/09/033.jpg",
			 "img/small/09/034.jpg","img/small/09/035.jpg",
			 "img/small/09/036.jpg","img/small/09/037.jpg",
			 "img/small/09/038.jpg","img/small/09/039.jpg"
			
		],
	 name:["1", "2", "3", "4", "5",
		     "6", "7", "8", "9", "10",
		     "11", "12", "13", "14", "15",
		     "16", "17", "18", "19", "20",
		      "21", "22", "23", "24", "25",
		      "26", "27", "28", "29", "30",
		       "31", "32", "33", "34", "35",
		     "36", "37", "38", "39", "40"
		  ] 
	},
	//第二类  "影视看点",06
{
	Big:
		[	 
			 "img/big/06/000.jpg","img/big/06/001.jpg",
			 "img/big/06/002.jpg","img/big/06/003.jpg",
			 "img/big/06/004.jpg","img/big/06/005.jpg",
			 "img/big/06/006.jpg","img/big/06/007.jpg",
			 "img/big/06/008.jpg","img/big/06/009.jpg",
			 "img/big/06/010.jpg","img/big/06/011.jpg",
			 "img/big/06/012.jpg","img/big/06/013.jpg",
			 "img/big/06/014.jpg","img/big/06/015.jpg",
			 "img/big/06/016.jpg","img/big/06/017.jpg",
			 "img/big/06/018.jpg","img/big/06/019.jpg",
			 "img/big/06/020.jpg","img/big/06/021.jpg",
			 "img/big/06/022.jpg","img/big/06/023.jpg",
			 "img/big/06/024.jpg","img/big/06/025.jpg",
			 "img/big/06/026.jpg","img/big/06/027.jpg",
			 "img/big/06/028.jpg","img/big/06/029.jpg",
			 "img/big/06/030.jpg","img/big/06/031.jpg",
			 "img/big/06/032.jpg","img/big/06/033.jpg",
			 "img/big/06/034.jpg","img/big/06/035.jpg",
			 "img/big/06/036.jpg","img/big/06/037.jpg",
			 "img/big/06/038.jpg","img/big/06/039.jpg"
		],
	Small:
		[	 
			 "img/small/06/000.jpg","img/small/06/001.jpg",
			 "img/small/06/002.jpg","img/small/06/003.jpg",
			 "img/small/06/004.jpg","img/small/06/005.jpg",
			 "img/small/06/006.jpg","img/small/06/007.jpg",
			 "img/small/06/008.jpg","img/small/06/009.jpg",
			 "img/small/06/010.jpg","img/small/06/011.jpg",
			 "img/small/06/012.jpg","img/small/06/013.jpg",
			 "img/small/06/014.jpg","img/small/06/015.jpg",
			 "img/small/06/016.jpg","img/small/06/017.jpg",
			 "img/small/06/018.jpg","img/small/06/019.jpg",
			 "img/small/06/020.jpg","img/small/06/021.jpg",
			 "img/small/06/022.jpg","img/small/06/023.jpg",
			 "img/small/06/024.jpg","img/small/06/025.jpg",
			 "img/small/06/026.jpg","img/small/06/027.jpg",
			 "img/small/06/028.jpg","img/small/06/029.jpg",
			 "img/small/06/030.jpg","img/small/06/031.jpg",
			 "img/small/06/032.jpg","img/small/06/033.jpg",
			 "img/small/06/034.jpg","img/small/06/035.jpg",
			 "img/small/06/036.jpg","img/small/06/037.jpg",
			 "img/small/06/038.jpg","img/small/06/039.jpg"
		],
	name:["HAPPY FEET", "影视明星1", "影视明星2", "影视明星3", "影视明星4",
		  "影视明星5", "明星合影", "阿凡达1", "阿凡达2", "阿凡达3",
		  "阿凡达4", "阿凡达5", "阿凡达6", "阿凡达7", "阿凡达8",
		  "阿凡达9", "阿凡达10", "阿凡达11", "阿凡达12", "阿凡达13",
		  "阿凡达14", "豪斯医生1", "豪斯医生2", "功夫熊猫", "幕光之城1",
		  "幕光之城2", "幕光之城3", "幕光之城4", "幕光之城5", "幕光之城6",
		  "机器人总动员1", "机器人总动员2", "机器人总动员3", "机器人总动员4", "机器人总动员5", 
		  "机器人总动员6", "机器人总动员7", "机器人总动员7", "机器人总动员7", "想打人"
		  ]
},
		//第三类  "靓丽明星",01
{
	Big:
		[
			 "img/big/01/000.jpg","img/big/01/001.jpg",
			 "img/big/01/002.jpg","img/big/01/003.jpg",
			 "img/big/01/004.jpg","img/big/01/005.jpg",
			 "img/big/01/006.jpg","img/big/01/007.jpg",
			 "img/big/01/008.jpg","img/big/01/009.jpg",
			 "img/big/01/010.jpg","img/big/01/011.jpg",
			 "img/big/01/012.jpg","img/big/01/013.jpg",
			 "img/big/01/014.jpg","img/big/01/015.jpg",
			 "img/big/01/016.jpg","img/big/01/017.jpg",
			 "img/big/01/018.jpg","img/big/01/019.jpg",
			 "img/big/01/020.jpg","img/big/01/021.jpg",
			 "img/big/01/022.jpg","img/big/01/023.jpg",
			 "img/big/01/024.jpg","img/big/01/025.jpg",
			 "img/big/01/026.jpg","img/big/01/027.jpg",
			 "img/big/01/028.jpg","img/big/01/029.jpg",
			 "img/big/01/030.jpg","img/big/01/031.jpg",
			 "img/big/01/032.jpg","img/big/01/033.jpg",
			 "img/big/01/034.jpg","img/big/01/035.jpg",
			 "img/big/01/036.jpg","img/big/01/037.jpg",
			 "img/big/01/038.jpg","img/big/01/039.jpg"
		],
	Small:
		[
			 "img/small/01/000.jpg","img/small/01/001.jpg",
			 "img/small/01/002.jpg","img/small/01/003.jpg",
			 "img/small/01/004.jpg","img/small/01/005.jpg",
			 "img/small/01/006.jpg","img/small/01/007.jpg",
			 "img/small/01/008.jpg","img/small/01/009.jpg",
			 "img/small/01/010.jpg","img/small/01/011.jpg",
			 "img/small/01/012.jpg","img/small/01/013.jpg",
			 "img/small/01/014.jpg","img/small/01/015.jpg",
			 "img/small/01/016.jpg","img/small/01/017.jpg",
			 "img/small/01/018.jpg","img/small/01/019.jpg",
			 "img/small/01/020.jpg","img/small/01/021.jpg",
			 "img/small/01/022.jpg","img/small/01/023.jpg",
			 "img/small/01/024.jpg","img/small/01/025.jpg",
			 "img/small/01/026.jpg","img/small/01/027.jpg",
			 "img/small/01/028.jpg","img/small/01/029.jpg",
			 "img/small/01/030.jpg","img/small/01/031.jpg",
			 "img/small/01/032.jpg","img/small/01/033.jpg",
			 "img/small/01/034.jpg","img/small/01/035.jpg",
			 "img/small/01/036.jpg","img/small/01/037.jpg",
			 "img/small/01/038.jpg","img/small/01/039.jpg"
		],
	name:["那边风景也不错", "迷人的眼睛", "深沉", "先来唱一首", "定住",
		  "怎一个靓字了得", "我show我自己", "黄圣依", "范冰冰", "李念",
		  "演艺才子", "酷不？", "认真的看", "李嘉欣", "李嘉欣",
		  "看这里看这里", "那是什么", "范冰冰", "时装秀", "宁静",
		  "孙俪", "甜美的微笑", "微风轻轻的吹", "开心", "恭喜恭喜",
		  "牛不？", "看一下", "美丽的舒淇", "韩国明星", "韩国明星",
		  "黄奕", "黄奕", "黄奕", "刘亦菲", "黄奕",
		  "刘亦菲", "刘亦菲", "刘亦菲", "刘亦菲", "范冰冰"
		  ]
},
		//第四类  "游山玩水",08
{
	Big:
		[
			 "img/big/08/000.jpg","img/big/08/001.jpg",
			 "img/big/08/002.jpg","img/big/08/003.jpg",
			 "img/big/08/004.jpg","img/big/08/005.jpg",
			 "img/big/08/006.jpg","img/big/08/007.jpg",
			 "img/big/08/008.jpg","img/big/08/009.jpg",
			 "img/big/08/010.jpg","img/big/08/011.jpg",
			 "img/big/08/012.jpg","img/big/08/013.jpg",
			 "img/big/08/014.jpg","img/big/08/015.jpg",
			 "img/big/08/016.jpg","img/big/08/017.jpg",
			 "img/big/08/018.jpg","img/big/08/019.jpg",
			 "img/big/08/020.jpg","img/big/08/021.jpg",
			 "img/big/08/022.jpg","img/big/08/023.jpg",
			 "img/big/08/024.jpg","img/big/08/025.jpg",
			 "img/big/08/026.jpg","img/big/08/027.jpg",
			 "img/big/08/028.jpg","img/big/08/029.jpg",
			 "img/big/08/030.jpg","img/big/08/031.jpg",
			 "img/big/08/032.jpg","img/big/08/033.jpg",
			 "img/big/08/034.jpg","img/big/08/035.jpg",
			 "img/big/08/036.jpg","img/big/08/037.jpg",
			 "img/big/08/038.jpg","img/big/08/039.jpg"
		],
	Small:
		[
			 "img/small/08/000.jpg","img/small/08/001.jpg",
			 "img/small/08/002.jpg","img/small/08/003.jpg",
			 "img/small/08/004.jpg","img/small/08/005.jpg",
			 "img/small/08/006.jpg","img/small/08/007.jpg",
			 "img/small/08/008.jpg","img/small/08/009.jpg",
			 "img/small/08/010.jpg","img/small/08/011.jpg",
			 "img/small/08/012.jpg","img/small/08/013.jpg",
			 "img/small/08/014.jpg","img/small/08/015.jpg",
			 "img/small/08/016.jpg","img/small/08/017.jpg",
			 "img/small/08/018.jpg","img/small/08/019.jpg",
			 "img/small/08/020.jpg","img/small/08/021.jpg",
			 "img/small/08/022.jpg","img/small/08/023.jpg",
			 "img/small/08/024.jpg","img/small/08/025.jpg",
			 "img/small/08/026.jpg","img/small/08/027.jpg",
			 "img/small/08/028.jpg","img/small/08/029.jpg",
			 "img/small/08/030.jpg","img/small/08/031.jpg",
			 "img/small/08/032.jpg","img/small/08/033.jpg",
			 "img/small/08/034.jpg","img/small/08/035.jpg",
			 "img/small/08/036.jpg","img/small/08/037.jpg",
			 "img/small/08/038.jpg","img/small/08/039.jpg"
		],
	name:["壮观", "给我来一个", "你往哪里跑", "看看有啥", "进去走走",
		  "哇，来了", "过去探探", "想飞", "小心", "前浪",
		  "飞喽", "幸福着呢", "找人回来", "美味", "想吃？",
		  "过来给你", "蹲餐", "互相尝尝", "认真的吃", "母鸡好强大",
		  "老鹰太软弱", "学的像不？", "叮咚", "我不告诉你", "看形",
		  "唱两首", "牌呢", "那里怎么了", "我来露一手", "要先下作料",
		  "开始炒啦", "宫保鸡丁", "出锅了", "食神", "每人一道菜",
		  "这是茄子么？", "暖暖", "好想吃啊", "先来合个影", "姿态各异"
		  ]
},
		//第五类  "名车欣赏",02
{
	Big:
		[
			 "img/big/02/000.jpg","img/big/02/001.jpg",
			 "img/big/02/002.jpg","img/big/02/003.jpg",
			 "img/big/02/004.jpg","img/big/02/005.jpg",
			 "img/big/02/006.jpg","img/big/02/007.jpg",
			 "img/big/02/008.jpg","img/big/02/009.jpg",
			 "img/big/02/010.jpg","img/big/02/011.jpg",
			 "img/big/02/012.jpg","img/big/02/013.jpg",
			 "img/big/02/014.jpg","img/big/02/015.jpg",
			 "img/big/02/016.jpg","img/big/02/017.jpg",
			 "img/big/02/018.jpg","img/big/02/019.jpg",
			 "img/big/02/020.jpg","img/big/02/021.jpg",
			 "img/big/02/022.jpg","img/big/02/023.jpg",
			 "img/big/02/024.jpg","img/big/02/025.jpg",
			 "img/big/02/026.jpg","img/big/02/027.jpg",
			 "img/big/02/028.jpg","img/big/02/029.jpg",
			 "img/big/02/030.jpg","img/big/02/031.jpg",
			 "img/big/02/032.jpg","img/big/02/033.jpg",
			 "img/big/02/034.jpg","img/big/02/035.jpg",
			 "img/big/02/036.jpg","img/big/02/037.jpg",
			 "img/big/02/038.jpg","img/big/02/039.jpg"
		],
	Small:
		[
			 "img/small/02/000.jpg","img/small/02/001.jpg",
			 "img/small/02/002.jpg","img/small/02/003.jpg",
			 "img/small/02/004.jpg","img/small/02/005.jpg",
			 "img/small/02/006.jpg","img/small/02/007.jpg",
			 "img/small/02/008.jpg","img/small/02/009.jpg",
			 "img/small/02/010.jpg","img/small/02/011.jpg",
			 "img/small/02/012.jpg","img/small/02/013.jpg",
			 "img/small/02/014.jpg","img/small/02/015.jpg",
			 "img/small/02/016.jpg","img/small/02/017.jpg",
			 "img/small/02/018.jpg","img/small/02/019.jpg",
			 "img/small/02/020.jpg","img/small/02/021.jpg",
			 "img/small/02/022.jpg","img/small/02/023.jpg",
			 "img/small/02/024.jpg","img/small/02/025.jpg",
			 "img/small/02/026.jpg","img/small/02/027.jpg",
			 "img/small/02/028.jpg","img/small/02/029.jpg",
			 "img/small/02/030.jpg","img/small/02/031.jpg",
			 "img/small/02/032.jpg","img/small/02/033.jpg",
			 "img/small/02/034.jpg","img/small/02/035.jpg",
			 "img/small/02/036.jpg","img/small/02/037.jpg",
			 "img/small/02/038.jpg","img/small/02/039.jpg"
		],
	name:["尊贵", "名车欣赏一", "敞篷", "名车欣赏二", "名车欣赏三",
	  "两款都不错", "名车欣赏四", "名车欣赏五", "速度好快", "名车欣赏九", 
	  "变形金刚一", "名车欣赏十", "大家都来拍","名车欣赏七","名车欣赏六", 
	  "变形金刚二", "名车欣赏十一", "变形金刚三", "名车欣赏十二", "够特别",
	  "名车欣赏十三", "名车欣赏十四", "名车欣赏十五", "好快哦", "名车欣赏十七",
	  "名车欣赏十八", "名车欣赏十九", "名车欣赏二十", "有型", "名车欣赏二十一",
	  "名车欣赏二十二", "名车欣赏二十三", "名车欣赏二十四", "名车欣赏二十五", "名车欣赏二十六",
	  "名车欣赏二十七", "名车欣赏二十八", "名车欣赏二十九", "名车欣赏三十", "名车欣赏三十一"
	  ]
},
		//第六类  "世界风光",04
{
		Big:
		[
			 "img/big/04/000.jpg","img/big/04/001.jpg",
			 "img/big/04/002.jpg","img/big/04/003.jpg",
			 "img/big/04/004.jpg","img/big/04/005.jpg",
			 "img/big/04/006.jpg","img/big/04/007.jpg",
			 "img/big/04/008.jpg","img/big/04/009.jpg",
			 "img/big/04/010.jpg","img/big/04/011.jpg",
			 "img/big/04/012.jpg","img/big/04/013.jpg",
			 "img/big/04/014.jpg","img/big/04/015.jpg",
			 "img/big/04/016.jpg","img/big/04/017.jpg",
			 "img/big/04/018.jpg","img/big/04/019.jpg",
			 "img/big/04/020.jpg","img/big/04/021.jpg",
			 "img/big/04/022.jpg","img/big/04/023.jpg",
			 "img/big/04/024.jpg","img/big/04/025.jpg",
			 "img/big/04/026.jpg","img/big/04/027.jpg",
			 "img/big/04/028.jpg","img/big/04/029.jpg",
			 "img/big/04/030.jpg","img/big/04/031.jpg",
			 "img/big/04/032.jpg","img/big/04/033.jpg",
			 "img/big/04/034.jpg","img/big/04/035.jpg",
			 "img/big/04/036.jpg","img/big/04/037.jpg",
			 "img/big/04/038.jpg","img/big/04/039.jpg"
		],
		Small:
		[
			 "img/small/04/000.jpg","img/small/04/001.jpg",
			 "img/small/04/002.jpg","img/small/04/003.jpg",
			 "img/small/04/004.jpg","img/small/04/005.jpg",
			 "img/small/04/006.jpg","img/small/04/007.jpg",
			 "img/small/04/008.jpg","img/small/04/009.jpg",
			 "img/small/04/010.jpg","img/small/04/011.jpg",
			 "img/small/04/012.jpg","img/small/04/013.jpg",
			 "img/small/04/014.jpg","img/small/04/015.jpg",
			 "img/small/04/016.jpg","img/small/04/017.jpg",
			 "img/small/04/018.jpg","img/small/04/019.jpg",
			 "img/small/04/020.jpg","img/small/04/021.jpg",
			 "img/small/04/022.jpg","img/small/04/023.jpg",
			 "img/small/04/024.jpg","img/small/04/025.jpg",
			 "img/small/04/026.jpg","img/small/04/027.jpg",
			 "img/small/04/028.jpg","img/small/04/029.jpg",
			 "img/small/04/030.jpg","img/small/04/031.jpg",
			 "img/small/04/032.jpg","img/small/04/033.jpg",
			 "img/small/04/034.jpg","img/small/04/035.jpg",
			 "img/small/04/036.jpg","img/small/04/037.jpg",
			 "img/small/04/038.jpg","img/small/04/039.jpg"
		],
	name:["天上人间", "清净生活", "原始建筑", "大象鼻子", "桥上桥",
	  "密集地带", "小桥流水人家", "溪边建筑", "宫殿式建筑", "风车",
	  "资源巨大", "幸福的渔民", "唯一的高", "统一协调", "雪山下的房屋",
	  "神圣的殿堂", "城市一点", "时间", "美丽风光", "依山傍水",
	  "水上生活", "居在山中", "海上世界", "秋天美景", "山间生活",
	  "水乡", "山水相连", "水的另一边", "室外桃源", "美丽别墅",
	  "地大物博", "水上行舟", "朦胧景色", "雕刻艺术", "雕刻艺术",
	  "丰收景象", "天上人间", "幽静雨停", "夜色美景", "夕阳无线"
	  ]
}

];
*/
<!--在线图库－视图模式-->
picMode = {info:[
	{name:"国家地理"},//05
	{name:"设计图库"},//03
	{name:"影视海报"},//06
	{name:"汽车世界"},//02
	{name:"明星云集"},//01
	{name:"景色欣赏"}//07
	],
	picArr: [

	   ["img/small/04/000.jpg","img/small/04/020.jpg",
		"img/small/04/002.jpg","img/small/04/030.jpg",
		"img/small/04/004.jpg","img/small/04/039.jpg"
		],
	   ["img/small/03/000.jpg","img/small/03/020.jpg",
		"img/small/03/002.jpg","img/small/03/030.jpg",
		"img/small/03/004.jpg","img/small/03/039.jpg"
		],
	   ["img/small/06/000.jpg","img/small/06/020.jpg",
		"img/small/06/002.jpg","img/small/06/030.jpg",
		"img/small/06/004.jpg","img/small/06/039.jpg"
		],
	   ["img/small/02/000.jpg","img/small/02/020.jpg",
		"img/small/02/002.jpg","img/small/02/030.jpg",
		"img/small/02/004.jpg","img/small/02/039.jpg"
		],
	   ["img/small/01/000.jpg","img/small/01/020.jpg",
		"img/small/01/002.jpg","img/small/01/030.jpg",
		"img/small/01/004.jpg","img/small/01/039.jpg"
		],
	   ["img/small/07/000.jpg","img/small/07/020.jpg",
		"img/small/07/002.jpg","img/small/07/030.jpg",
		"img/small/07/004.jpg","img/small/07/039.jpg"
		]
	]
};

<!--在线图库－分类-->
picMode_2 = [
	{name:"美洲风光", 
		picArr:
			["img/small/04/000.jpg","img/small/04/001.jpg",
			 "img/small/04/002.jpg","img/small/04/003.jpg",
			 "img/small/04/004.jpg","img/small/04/005.jpg",
			 "img/trip/001.jpg","img/small/04/007.jpg",
			 "img/small/04/008.jpg","img/small/04/009.jpg",
			 "img/small/04/010.jpg","img/small/04/011.jpg",
			 "img/trip/002.jpg","img/small/04/013.jpg",
			 "img/small/04/014.jpg","img/small/04/015.jpg",
			 "img/small/04/016.jpg","img/small/04/017.jpg",
			 "img/small/04/018.jpg","img/small/04/019.jpg",
			 "img/small/04/020.jpg","img/small/04/021.jpg",
			 "img/small/04/022.jpg","img/small/04/023.jpg",
			 "img/small/04/024.jpg","img/small/04/025.jpg",
			 "img/small/04/026.jpg","img/small/04/027.jpg",
			 "img/small/04/028.jpg","img/small/04/029.jpg"
			],
		bigPic:
			["img/big/04/000.jpg","img/big/04/001.jpg",
			 "img/big/04/002.jpg","img/big/04/003.jpg",
			 "img/big/04/004.jpg","img/big/04/005.jpg",
			 "img/big/04/006.jpg","img/big/04/007.jpg",
			 "img/big/04/008.jpg","img/big/04/009.jpg",
			 "img/big/04/010.jpg","img/big/04/011.jpg",
			 "img/big/04/012.jpg","img/big/04/013.jpg",
			 "img/big/04/014.jpg","img/big/04/015.jpg",
			 "img/big/04/016.jpg","img/big/04/017.jpg",
			 "img/big/04/018.jpg","img/big/04/019.jpg",
			 "img/big/04/020.jpg","img/big/04/021.jpg",
			 "img/big/04/022.jpg","img/big/04/023.jpg",
			 "img/big/04/024.jpg","img/big/04/025.jpg",
			 "img/big/04/026.jpg","img/big/04/027.jpg",
			 "img/big/04/028.jpg","img/big/04/029.jpg"
			],
		picName:
			[ "天上人间", "清净生活", "原始建筑", "大象鼻子", "桥上桥",
			  "密集地带", "小桥流水人家", "溪边建筑", "宫殿式建筑", "风车",
			  "资源巨大", "幸福的渔民", "唯一的高", "统一协调", "雪山下的房屋",
			  "神圣的殿堂", "城市一点", "时间", "美丽风光", "依山傍水",
			  "水上生活", "居在山中", "海上世界", "秋天美景", "山间生活",
			  "水乡", "山水相连", "水的另一边", "室外桃源", "美丽别墅"
			  ]
		},
	{name:"欧洲风光",
		picArr:
			["img/small/07/000.jpg","img/small/07/001.jpg",
			 "img/small/07/002.jpg","img/small/07/003.jpg",
			 "img/small/07/004.jpg","img/small/07/005.jpg",
			 "img/trip/001.jpg","img/small/07/007.jpg",
			 "img/small/07/008.jpg","img/small/07/009.jpg",
			 "img/small/07/010.jpg","img/small/07/011.jpg",
			 "img/trip/002.jpg","img/small/07/013.jpg",
			 "img/small/07/014.jpg","img/small/07/015.jpg",
			 "img/small/07/016.jpg","img/small/07/017.jpg",
			 "img/small/07/018.jpg","img/small/07/019.jpg",
			 "img/small/07/020.jpg","img/small/07/021.jpg",
			 "img/small/07/022.jpg","img/small/07/023.jpg",
			 "img/small/07/024.jpg","img/small/07/025.jpg",
			 "img/small/07/026.jpg","img/small/07/027.jpg",
			 "img/small/07/028.jpg","img/small/07/029.jpg"
			],
		bigPic:
			["img/big/07/000.jpg","img/big/07/001.jpg",
			 "img/big/07/002.jpg","img/big/07/003.jpg",
			 "img/big/07/004.jpg","img/big/07/005.jpg",
			 "img/trip/001.jpg","img/big/07/007.jpg",
			 "img/big/07/008.jpg","img/big/07/009.jpg",
			 "img/big/07/010.jpg","img/big/07/011.jpg",
			 "img/trip/002.jpg","img/big/07/013.jpg",
			 "img/big/07/014.jpg","img/big/07/015.jpg",
			 "img/big/07/016.jpg","img/big/07/017.jpg",
			 "img/big/07/018.jpg","img/big/07/019.jpg",
			 "img/big/07/020.jpg","img/big/07/021.jpg",
			 "img/big/07/022.jpg","img/big/07/023.jpg",
			 "img/big/07/024.jpg","img/big/07/025.jpg",
			 "img/big/07/026.jpg","img/big/07/027.jpg",
			 "img/big/07/028.jpg","img/big/07/029.jpg"
			],
		picName:
			["美丽的河", "山间溪水", "投射的光", "红红的枫叶", "小瀑布",
			  "最美的路", "壮观", "锦绣河山", "小木屋", "海边生活",
			  "冰河", "游牧", "最美的路", "风起浪高", "原始森林",
			  "溪涧小路", "山石水路", "海底世界", "优美景色", "奔流不息",
			  "秋高气爽", "雾凇", "最美的路", "山路不弯", "山水相连",
			  "铁轨", "吉林雾凇", "美丽雾凇", "白雪皑皑", "冰雪世界"
			  ]
	},
	{name:"亚洲风景",
		picArr:
			["img/small/04/029.jpg","img/small/04/028.jpg",
			 "img/small/04/027.jpg","img/small/04/026.jpg",
			 "img/small/04/025.jpg","img/small/04/024.jpg",
			 "img/trip/001.jpg","img/small/04/022.jpg",
			 "img/small/04/021.jpg","img/small/04/020.jpg",
			 "img/small/04/019.jpg","img/small/04/018.jpg",
			 "img/trip/002.jpg","img/small/04/016.jpg",
			 "img/small/04/015.jpg","img/small/04/014.jpg",
			 "img/small/04/013.jpg","img/small/04/012.jpg",
			 "img/small/04/011.jpg","img/small/04/010.jpg",
			 "img/small/04/009.jpg","img/small/04/008.jpg",
			 "img/small/04/007.jpg","img/small/04/006.jpg",
			 "img/small/04/005.jpg","img/small/04/004.jpg",
			 "img/small/04/003.jpg","img/small/04/002.jpg",
			 "img/small/04/001.jpg","img/small/04/000.jpg"
			],
		bigPic:
			["img/big/04/029.jpg","img/big/04/028.jpg",
			 "img/big/04/027.jpg","img/big/04/026.jpg",
			 "img/big/04/025.jpg","img/big/04/024.jpg",
			 "img/big/04/023.jpg","img/big/04/022.jpg",
			 "img/big/04/021.jpg","img/big/04/020.jpg",
			 "img/big/04/019.jpg","img/big/04/018.jpg",
			 "img/big/04/017.jpg","img/big/04/016.jpg",
			 "img/big/04/015.jpg","img/big/04/014.jpg",
			 "img/big/04/013.jpg","img/big/04/012.jpg",
			 "img/big/04/011.jpg","img/big/04/010.jpg",
			 "img/big/04/009.jpg","img/big/04/008.jpg",
			 "img/big/04/007.jpg","img/big/04/006.jpg",
			 "img/big/04/005.jpg","img/big/04/004.jpg",
			 "img/big/04/003.jpg","img/big/04/002.jpg",
			 "img/big/04/001.jpg","img/big/04/000.jpg"
			],
		picName:
			["绿色森林", "奇异四溅", "心中的绿色", "梦幻世界", "从天而降",
			 "北极熊", "变异火烧云", "安静", "另类", "魔术",
			 "奇异空间", "飞翔", "原始森林", "梦幻世界", "沉思", 
			 "自由动态", "奇思妙想", "幻境", "干杯", "角落", 
			 "飞舞", "源头", "格子空间", "方圆", "齐心协力", 
			 "叶子看世界", "飘逸", "光", "高速运动", "色彩斑斓", 
			  ]
	},
	{name:"日本旅游", 
		picArr:
			["img/small/07/029.jpg","img/small/07/028.jpg",
			 "img/small/07/027.jpg","img/small/07/026.jpg",
			 "img/small/07/025.jpg","img/small/07/024.jpg",
			 "img/trip/001.jpg","img/small/07/022.jpg",
			 "img/small/07/021.jpg","img/small/07/020.jpg",
			 "img/small/07/019.jpg","img/small/07/018.jpg",
			 "img/trip/002.jpg","img/small/07/016.jpg",
			 "img/small/07/015.jpg","img/small/07/014.jpg",
			 "img/small/07/013.jpg","img/small/07/012.jpg",
			 "img/small/07/011.jpg","img/small/07/010.jpg",
			 "img/small/07/009.jpg","img/small/07/008.jpg",
			 "img/small/07/007.jpg","img/small/07/006.jpg",
			 "img/small/07/005.jpg","img/small/07/004.jpg",
			 "img/small/07/003.jpg","img/small/07/002.jpg",
			 "img/small/07/001.jpg","img/small/07/000.jpg"
			],
		bigPic:
			["img/big/07/029.jpg","img/big/07/028.jpg",
			 "img/big/07/027.jpg","img/big/07/026.jpg",
			 "img/big/07/025.jpg","img/big/07/024.jpg",
			 "img/big/07/023.jpg","img/big/07/022.jpg",
			 "img/big/07/021.jpg","img/big/07/020.jpg",
			 "img/big/07/019.jpg","img/big/07/018.jpg",
			 "img/big/07/017.jpg","img/big/07/016.jpg",
			 "img/big/07/015.jpg","img/big/07/014.jpg",
			 "img/big/07/013.jpg","img/big/07/012.jpg",
			 "img/big/07/011.jpg","img/big/07/010.jpg",
			 "img/big/07/009.jpg","img/big/07/008.jpg",
			 "img/big/07/007.jpg","img/big/07/006.jpg",
			 "img/big/07/005.jpg","img/big/07/004.jpg",
			 "img/big/07/003.jpg","img/big/07/002.jpg",
			 "img/big/07/001.jpg","img/big/07/000.jpg"
			],
		picName:
			["冰雪世界", "白雪皑皑",  "美丽雾凇", "吉林雾凇","铁轨",
			 "山水相连", "山路不弯", "最美的路", "雾凇", "秋高气爽",
			 "奔流不息", "优美景色", "海底世界", "山石水路", "溪涧小路",
			 "原始森林", "风起浪高", "最美的路", "游牧", "冰河",
			 "海边生活", "小木屋", "锦绣河山", "壮观", "最美的路",
			 "小瀑布", "红红的枫叶", "投射的光", "山间溪水", "美丽的河"
			  ]
	},

	{name:"风情拉萨", 
		picArr:
			["img/small/04/016.jpg","img/small/04/017.jpg",
			 "img/small/04/018.jpg","img/small/04/019.jpg",
			 "img/small/04/020.jpg","img/small/04/021.jpg",
			 "img/trip/001.jpg","img/small/04/023.jpg",
			 "img/small/04/024.jpg","img/small/04/025.jpg",
			 "img/small/04/026.jpg","img/small/04/027.jpg",
			 "img/trip/002.jpg","img/small/04/029.jpg",
			 "img/small/07/000.jpg","img/small/07/001.jpg",
			 "img/small/07/002.jpg","img/small/07/003.jpg",
			 "img/small/07/004.jpg","img/small/07/005.jpg",
			 "img/small/07/006.jpg","img/small/07/007.jpg",
			 "img/small/07/008.jpg","img/small/07/009.jpg",
			 "img/small/07/010.jpg","img/small/07/011.jpg",
			 "img/small/07/012.jpg","img/small/07/013.jpg",
			 "img/small/07/014.jpg","img/small/07/015.jpg"
			],
		bigPic:
			["img/big/04/016.jpg","img/big/04/017.jpg",
			 "img/big/04/018.jpg","img/big/04/019.jpg",
			 "img/big/04/020.jpg","img/big/04/021.jpg",
			 "img/big/04/022.jpg","img/big/04/023.jpg",
			 "img/big/04/024.jpg","img/big/04/025.jpg",
			 "img/big/04/026.jpg","img/big/04/027.jpg",
			 "img/big/04/028.jpg","img/big/04/029.jpg",
			 "img/big/07/000.jpg","img/big/07/001.jpg",
			 "img/big/07/002.jpg","img/big/07/003.jpg",
			 "img/big/07/004.jpg","img/big/07/005.jpg",
			 "img/big/07/006.jpg","img/big/07/007.jpg",
			 "img/big/07/008.jpg","img/big/07/009.jpg",
			 "img/big/07/010.jpg","img/big/07/011.jpg",
			 "img/big/07/012.jpg","img/big/07/013.jpg",
			 "img/big/07/014.jpg","img/big/07/015.jpg"
			],
		picName:
			[ "神圣的殿堂", "城市一点", "时间", "美丽风光", "依山傍水",
			  "水上生活", "居在山中", "海上世界", "秋天美景", "山间生活",
			  "水乡", "山水相连", "水的另一边", "室外桃源", "美丽别墅",
			  "美丽的河", "山间溪水", "投射的光", "红红的枫叶", "小瀑布",
			  "最美的路", "壮观", "锦绣河山", "小木屋", "海边生活",
			  "冰河", "游牧", "最美的路", "风起浪高", "原始森林"
			  ]
	}

];

<!--在线图库的其它五组-->
receive_1 =  [
	{name:"设计图库",
		picArr:
			["img/small/03/000.jpg","img/small/03/001.jpg",
			 "img/small/03/002.jpg","img/small/03/003.jpg",
			 "img/small/03/004.jpg","img/small/03/005.jpg",
			 "img/small/03/006.jpg","img/small/03/007.jpg",
			 "img/small/03/008.jpg","img/small/03/009.jpg",
			 "img/small/03/010.jpg","img/small/03/011.jpg",
			 "img/small/03/012.jpg","img/small/03/013.jpg",
			 "img/small/03/014.jpg","img/small/03/015.jpg",
			 "img/small/03/016.jpg","img/small/03/017.jpg",
			 "img/small/03/018.jpg","img/small/03/019.jpg",
			 "img/small/03/020.jpg","img/small/03/021.jpg",
			 "img/small/03/022.jpg","img/small/03/023.jpg",
			 "img/small/03/024.jpg","img/small/03/025.jpg",
			 "img/small/03/026.jpg","img/small/03/027.jpg",
			 "img/small/03/028.jpg","img/small/03/029.jpg",
			 "img/small/03/030.jpg","img/small/03/031.jpg",
			 "img/small/03/032.jpg","img/small/03/033.jpg",
			 "img/small/03/034.jpg","img/small/03/035.jpg",
			 "img/small/03/036.jpg","img/small/03/037.jpg",
			 "img/small/03/038.jpg","img/small/03/039.jpg"
			],
		bigPic:
			["img/big/03/000.jpg","img/big/03/001.jpg",
			 "img/big/03/002.jpg","img/big/03/003.jpg",
			 "img/big/03/004.jpg","img/big/03/005.jpg",
			 "img/big/03/006.jpg","img/big/03/007.jpg",
			 "img/big/03/008.jpg","img/big/03/009.jpg",
			 "img/big/03/010.jpg","img/big/03/011.jpg",
			 "img/big/03/012.jpg","img/big/03/013.jpg",
			 "img/big/03/014.jpg","img/big/03/015.jpg",
			 "img/big/03/016.jpg","img/big/03/017.jpg",
			 "img/big/03/018.jpg","img/big/03/019.jpg",
			 "img/big/03/020.jpg","img/big/03/021.jpg",
			 "img/big/03/022.jpg","img/big/03/023.jpg",
			 "img/big/03/024.jpg","img/big/03/025.jpg",
			 "img/big/03/026.jpg","img/big/03/027.jpg",
			 "img/big/03/028.jpg","img/big/03/029.jpg",
			 "img/big/03/030.jpg","img/big/03/031.jpg",
			 "img/big/03/032.jpg","img/big/03/033.jpg",
			 "img/big/03/034.jpg","img/big/03/035.jpg",
			 "img/big/03/036.jpg","img/big/03/037.jpg",
			 "img/big/03/038.jpg","img/big/03/039.jpg"
			],
		picName:
			["色彩斑斓", "高速运动", "光", "飘逸", "叶子看世界",
			  "齐心协力", "方圆", "格子空间", "源头", "飞舞",
			  "角落", "干杯", "幻境", "奇思妙想", "自由动态",
			  "沉思", "梦幻世界", "原始森林", "飞翔", "奇异空间",
			  "魔术", "另类", "安静", "变异火烧云", "北极熊",
			  "从天而降", "梦幻世界", "心中的绿色", "奇异四溅", "绿色森林",
			  "野生动物", "盒子", "体验探险", "开始前进", "高楼大厦",
			  "享受自由","公益广告", "三角关系", "心", "自由飞行"
			  ]
	},
	{name:"影视海报", 
		picArr:
			["img/small/06/000.jpg","img/small/06/001.jpg",
			 "img/small/06/002.jpg","img/small/06/003.jpg",
			 "img/small/06/004.jpg","img/small/06/005.jpg",
			 "img/small/06/006.jpg","img/small/06/007.jpg",
			 "img/small/06/008.jpg","img/small/06/009.jpg",
			 "img/small/06/010.jpg","img/small/06/011.jpg",
			 "img/small/06/012.jpg","img/small/06/013.jpg",
			 "img/small/06/014.jpg","img/small/06/015.jpg",
			 "img/small/06/016.jpg","img/small/06/017.jpg",
			 "img/small/06/018.jpg","img/small/06/019.jpg",
			 "img/small/06/020.jpg","img/small/06/021.jpg",
			 "img/small/06/022.jpg","img/small/06/023.jpg",
			 "img/small/06/024.jpg","img/small/06/025.jpg",
			 "img/small/06/026.jpg","img/small/06/027.jpg",
			 "img/small/06/028.jpg","img/small/06/029.jpg",
			 "img/small/06/030.jpg","img/small/06/031.jpg",
			 "img/small/06/032.jpg","img/small/06/033.jpg",
			 "img/small/06/034.jpg","img/small/06/035.jpg",
			 "img/small/06/036.jpg","img/small/06/037.jpg",
			 "img/small/06/038.jpg","img/small/06/039.jpg"
			],
		bigPic:
			["img/big/06/000.jpg","img/big/06/001.jpg",
			 "img/big/06/002.jpg","img/big/06/003.jpg",
			 "img/big/06/004.jpg","img/big/06/005.jpg",
			 "img/big/06/006.jpg","img/big/06/007.jpg",
			 "img/big/06/008.jpg","img/big/06/009.jpg",
			 "img/big/06/010.jpg","img/big/06/011.jpg",
			 "img/big/06/012.jpg","img/big/06/013.jpg",
			 "img/big/06/014.jpg","img/big/06/015.jpg",
			 "img/big/06/016.jpg","img/big/06/017.jpg",
			 "img/big/06/018.jpg","img/big/06/019.jpg",
			 "img/big/06/020.jpg","img/big/06/021.jpg",
			 "img/big/06/022.jpg","img/big/06/023.jpg",
			 "img/big/06/024.jpg","img/big/06/025.jpg",
			 "img/big/06/026.jpg","img/big/06/027.jpg",
			 "img/big/06/028.jpg","img/big/06/029.jpg",
			 "img/big/06/030.jpg","img/big/06/031.jpg",
			 "img/big/06/032.jpg","img/big/06/033.jpg",
			 "img/big/06/034.jpg","img/big/06/035.jpg",
			 "img/big/06/036.jpg","img/big/06/037.jpg",
			 "img/big/06/038.jpg","img/big/06/039.jpg"
			],
		picName:
			[
		  "HAPPY FEET", "影视明星1", "影视明星2", "影视明星3", "影视明星4",
		  "影视明星5", "明星合影", "阿凡达1", "阿凡达2", "阿凡达3",
		  "阿凡达4", "阿凡达5", "阿凡达6", "阿凡达7", "阿凡达8",
		  "阿凡达9", "阿凡达10", "阿凡达11", "阿凡达12", "阿凡达13",
		  "阿凡达14", "豪斯医生1", "豪斯医生2", "功夫熊猫", "幕光之城1",
		  "幕光之城2", "幕光之城3", "幕光之城4", "幕光之城5", "幕光之城6",
		  "机器人总动员1", "机器人总动员2", "机器人总动员3", "机器人总动员4", "机器人总动员5", 
		  "机器人总动员6", "机器人总动员7", "机器人总动员7", "机器人总动员7", "想打人"
			  ]
	},

	{name:"汽车世界", 
		picArr:
			["img/small/02/000.jpg","img/small/02/001.jpg",
			 "img/small/02/002.jpg","img/small/02/003.jpg",
			 "img/small/02/004.jpg","img/small/02/005.jpg",
			 "img/small/02/006.jpg","img/small/02/007.jpg",
			 "img/small/02/008.jpg","img/small/02/009.jpg",
			 "img/small/02/010.jpg","img/small/02/011.jpg",
			 "img/small/02/012.jpg","img/small/02/013.jpg",
			 "img/small/02/014.jpg","img/small/02/015.jpg",
			 "img/small/02/016.jpg","img/small/02/017.jpg",
			 "img/small/02/018.jpg","img/small/02/019.jpg",
			 "img/small/02/020.jpg","img/small/02/021.jpg",
			 "img/small/02/022.jpg","img/small/02/023.jpg",
			 "img/small/02/024.jpg","img/small/02/025.jpg",
			 "img/small/02/026.jpg","img/small/02/027.jpg",
			 "img/small/02/028.jpg","img/small/02/029.jpg",
			 "img/small/02/030.jpg","img/small/02/031.jpg",
			 "img/small/02/032.jpg","img/small/02/033.jpg",
			 "img/small/02/034.jpg","img/small/02/035.jpg",
			 "img/small/02/036.jpg","img/small/02/037.jpg",
			 "img/small/02/038.jpg","img/small/02/039.jpg"
			],
		bigPic:
			["img/big/02/000.jpg","img/big/02/001.jpg",
			 "img/big/02/002.jpg","img/big/02/003.jpg",
			 "img/big/02/004.jpg","img/big/02/005.jpg",
			 "img/big/02/006.jpg","img/big/02/007.jpg",
			 "img/big/02/008.jpg","img/big/02/009.jpg",
			 "img/big/02/010.jpg","img/big/02/011.jpg",
			 "img/big/02/012.jpg","img/big/02/013.jpg",
			 "img/big/02/014.jpg","img/big/02/015.jpg",
			 "img/big/02/016.jpg","img/big/02/017.jpg",
			 "img/big/02/018.jpg","img/big/02/019.jpg",
			 "img/big/02/020.jpg","img/big/02/021.jpg",
			 "img/big/02/022.jpg","img/big/02/023.jpg",
			 "img/big/02/024.jpg","img/big/02/025.jpg",
			 "img/big/02/026.jpg","img/big/02/027.jpg",
			 "img/big/02/028.jpg","img/big/02/029.jpg",
			 "img/big/02/030.jpg","img/big/02/031.jpg",
			 "img/big/02/032.jpg","img/big/02/033.jpg",
			 "img/big/02/034.jpg","img/big/02/035.jpg",
			 "img/big/02/036.jpg","img/big/02/037.jpg",
			 "img/big/02/038.jpg","img/big/02/039.jpg"
			],
		picName:
			[ "尊贵", "名车欣赏一", "敞篷", "名车欣赏二", "名车欣赏三",
			  "两款都不错", "名车欣赏四", "名车欣赏五", "名车欣赏六", "名车欣赏七",
			  "速度好快", "名车欣赏九", "变形金刚一", "名车欣赏十", "大家都来拍",
			  "变形金刚二", "名车欣赏十一", "变形金刚三", "名车欣赏十二", "够特别",
			  "名车欣赏十三", "名车欣赏十四", "名车欣赏十五", "好快哦", "名车欣赏十七",
			  "名车欣赏十八", "名车欣赏十九", "名车欣赏二十", "有型", "名车欣赏二十一",
			  "名车欣赏二十二", "名车欣赏二十三", "名车欣赏二十四", "名车欣赏二十五", "名车欣赏二十六",
			  "名车欣赏二十七", "名车欣赏二十八", "名车欣赏二十九", "名车欣赏三十", "名车欣赏三十一"
			  ]
	},
{name:"明星云集", 
		picArr:
			["img/small/01/000.jpg","img/small/01/001.jpg",
			 "img/small/01/002.jpg","img/small/01/003.jpg",
			 "img/small/01/004.jpg","img/small/01/005.jpg",
			 "img/small/01/006.jpg","img/small/01/007.jpg",
			 "img/small/01/008.jpg","img/small/01/009.jpg",
			 "img/small/01/010.jpg","img/small/01/011.jpg",
			 "img/small/01/012.jpg","img/small/01/013.jpg",
			 "img/small/01/014.jpg","img/small/01/015.jpg",
			 "img/small/01/016.jpg","img/small/01/017.jpg",
			 "img/small/01/018.jpg","img/small/01/019.jpg",
			 "img/small/01/020.jpg","img/small/01/021.jpg",
			 "img/small/01/022.jpg","img/small/01/023.jpg",
			 "img/small/01/024.jpg","img/small/01/025.jpg",
			 "img/small/01/026.jpg","img/small/01/027.jpg",
			 "img/small/01/028.jpg","img/small/01/029.jpg",
			 "img/small/01/030.jpg","img/small/01/031.jpg",
			 "img/small/01/032.jpg","img/small/01/033.jpg",
			 "img/small/01/034.jpg","img/small/01/035.jpg",
			 "img/small/01/036.jpg","img/small/01/037.jpg",
			 "img/small/01/038.jpg","img/small/01/039.jpg"
			],
		bigPic:
			["img/big/01/000.jpg","img/big/01/001.jpg",
			 "img/big/01/002.jpg","img/big/01/003.jpg",
			 "img/big/01/004.jpg","img/big/01/005.jpg",
			 "img/big/01/006.jpg","img/big/01/007.jpg",
			 "img/big/01/008.jpg","img/big/01/009.jpg",
			 "img/big/01/010.jpg","img/big/01/011.jpg",
			 "img/big/01/012.jpg","img/big/01/013.jpg",
			 "img/big/01/014.jpg","img/big/01/015.jpg",
			 "img/big/01/016.jpg","img/big/01/017.jpg",
			 "img/big/01/018.jpg","img/big/01/019.jpg",
			 "img/big/01/020.jpg","img/big/01/021.jpg",
			 "img/big/01/022.jpg","img/big/01/023.jpg",
			 "img/big/01/024.jpg","img/big/01/025.jpg",
			 "img/big/01/026.jpg","img/big/01/027.jpg",
			 "img/big/01/028.jpg","img/big/01/029.jpg",
			 "img/big/01/030.jpg","img/big/01/031.jpg",
			 "img/big/01/032.jpg","img/big/01/033.jpg",
			 "img/big/01/034.jpg","img/big/01/035.jpg",
			 "img/big/01/036.jpg","img/big/01/037.jpg",
			 "img/big/01/038.jpg","img/big/01/039.jpg"
			],
		picName:
			[ "那边风景也不错", "迷人的眼睛", "深沉", "先来唱一首", "定住",
			  "怎一个靓字了得", "我show我自己", "黄圣依", "范冰冰", "李念",
			  "演艺才子", "酷不？", "认真的看", "李嘉欣", "李嘉欣",
			  "看这里看这里", "那是什么", "范冰冰", "时装秀", "宁静",
			  "孙俪", "甜美的微笑", "微风轻轻的吹", "开心", "恭喜恭喜",
			  "牛不？", "看一下", "美丽的舒淇", "韩国明星", "韩国明星",
			  "黄奕", "黄奕", "黄奕", "刘亦菲", "黄奕",
			  "刘亦菲", "刘亦菲", "刘亦菲", "刘亦菲", "范冰冰"
			  ]
	},
	{name:"景色欣赏",
		picArr:
			["img/small/07/000.jpg","img/small/07/001.jpg",
			 "img/small/07/002.jpg","img/small/07/003.jpg",
			 "img/small/07/004.jpg","img/small/07/005.jpg",
			 "img/small/07/006.jpg","img/small/07/007.jpg",
			 "img/small/07/008.jpg","img/small/07/009.jpg",
			 "img/small/07/010.jpg","img/small/07/011.jpg",
			 "img/small/07/012.jpg","img/small/07/013.jpg",
			 "img/small/07/014.jpg","img/small/07/015.jpg",
			 "img/small/07/016.jpg","img/small/07/017.jpg",
			 "img/small/07/018.jpg","img/small/07/019.jpg",
			 "img/small/07/020.jpg","img/small/07/021.jpg",
			 "img/small/07/022.jpg","img/small/07/023.jpg",
			 "img/small/07/024.jpg","img/small/07/025.jpg",
			 "img/small/07/026.jpg","img/small/07/027.jpg",
			 "img/small/07/028.jpg","img/small/07/029.jpg",
			 "img/small/07/030.jpg","img/small/07/031.jpg",
			 "img/small/07/032.jpg","img/small/07/033.jpg",
			 "img/small/07/034.jpg","img/small/07/035.jpg",
			 "img/small/07/036.jpg","img/small/07/037.jpg",
			 "img/small/07/038.jpg","img/small/07/039.jpg"
			],
		bigPic:
			["img/big/07/000.jpg","img/big/07/001.jpg",
			 "img/big/07/002.jpg","img/big/07/003.jpg",
			 "img/big/07/004.jpg","img/big/07/005.jpg",
			 "img/big/07/006.jpg","img/big/07/007.jpg",
			 "img/big/07/008.jpg","img/big/07/009.jpg",
			 "img/big/07/010.jpg","img/big/07/011.jpg",
			 "img/big/07/012.jpg","img/big/07/013.jpg",
			 "img/big/07/014.jpg","img/big/07/015.jpg",
			 "img/big/07/016.jpg","img/big/07/017.jpg",
			 "img/big/07/018.jpg","img/big/07/019.jpg",
			 "img/big/07/020.jpg","img/big/07/021.jpg",
			 "img/big/07/022.jpg","img/big/07/023.jpg",
			 "img/big/07/024.jpg","img/big/07/025.jpg",
			 "img/big/07/026.jpg","img/big/07/027.jpg",
			 "img/big/07/028.jpg","img/big/07/029.jpg",
			 "img/big/07/030.jpg","img/big/07/031.jpg",
			 "img/big/07/032.jpg","img/big/07/033.jpg",
			 "img/big/07/034.jpg","img/big/07/035.jpg",
			 "img/big/07/036.jpg","img/big/07/037.jpg",
			 "img/big/07/038.jpg","img/big/07/039.jpg"
			],
		picName:
			["美丽的河", "山间溪水", "投射的光", "红红的枫叶", "小瀑布",
			  "最美的路", "壮观", "锦绣河山", "小木屋", "海边生活",
			  "冰河", "游牧", "最美的路", "风起浪高", "原始森林",
			  "溪涧小路", "山石水路", "海底世界", "优美景色", "奔流不息",
			  "秋高气爽", "雾凇", "最美的路", "山路不弯", "山水相连",
			  "铁轨", "吉林雾凇", "美丽雾凇", "白雪皑皑", "冰雪世界",
			  "夕阳西下", "雪后", "月光", "冰雪风光", "森林",
			  "雾凇", "山顶", "梯田", "海岸", "貌似狮子"
			  ]
	}
];




<!--共享图片－－多用户-->

//到大图！！！！！！！！！！
sharePic = [
{name:"林瑞东", pic:[
			 "img/small/01/000.jpg","img/small/01/001.jpg",
			 "img/small/01/002.jpg","img/small/01/003.jpg",
			 "img/small/01/004.jpg","img/small/01/005.jpg"
				 ]
},
{name:"樊沃标", pic:[
			 "img/small/02/000.jpg","img/small/02/001.jpg",
			 "img/small/02/002.jpg","img/small/02/003.jpg",
			 "img/small/02/004.jpg","img/small/02/005.jpg"
				 ]
},
{name:"杨海丽", pic:[
			 "img/small/03/000.jpg","img/small/03/001.jpg",
			 "img/small/03/002.jpg","img/small/03/003.jpg",
			 "img/small/03/004.jpg","img/small/03/005.jpg"
				 ]
}
];

<!--共享图片－－单用户  shareUser.htm-->

var shareUser = {//---------------------------这个里面小图一定是35张，大图大于35张是可以的，名字一定跟大图是对应的
	pic:[{
		Small:[
				 "img/small/01/000.jpg","img/small/01/001.jpg",
				 "img/small/01/002.jpg","img/small/01/003.jpg",
				 "img/small/01/004.jpg","img/small/01/005.jpg",
				 "img/small/01/006.jpg","img/small/01/007.jpg",
				 "img/small/01/008.jpg","img/small/01/009.jpg",
				 "img/small/01/010.jpg","img/small/01/011.jpg",
				 "img/small/01/012.jpg","img/small/01/013.jpg",
				 "img/small/01/014.jpg","img/small/01/015.jpg",
				 "img/small/01/016.jpg","img/small/01/017.jpg",
				 "img/small/01/018.jpg","img/small/01/019.jpg",
				 "img/small/01/020.jpg","img/small/01/021.jpg",
				 "img/small/01/022.jpg","img/small/01/023.jpg",
				 "img/small/01/024.jpg","img/small/01/025.jpg",
				 "img/small/01/026.jpg","img/small/01/027.jpg",
				 "img/small/01/028.jpg","img/small/01/029.jpg",
				 "img/small/01/030.jpg","img/small/01/031.jpg",
				 "img/small/01/032.jpg","img/small/01/033.jpg",
				 "img/small/01/039.jpg"
		],
		Big:[
				 "img/big/01/000.jpg","img/big/01/001.jpg",
				 "img/big/01/002.jpg","img/big/01/003.jpg",
				 "img/big/01/004.jpg","img/big/01/005.jpg",
				 "img/big/01/006.jpg","img/big/01/007.jpg",
				 "img/big/01/008.jpg","img/big/01/009.jpg",
				 "img/big/01/010.jpg","img/big/01/011.jpg",
				 "img/big/01/012.jpg","img/big/01/013.jpg",
				 "img/big/01/014.jpg","img/big/01/015.jpg",
				 "img/big/01/016.jpg","img/big/01/017.jpg",
				 "img/big/01/018.jpg","img/big/01/019.jpg",
				 "img/big/01/020.jpg","img/big/01/021.jpg",
				 "img/big/01/022.jpg","img/big/01/023.jpg",
				 "img/big/01/024.jpg","img/big/01/025.jpg",
				 "img/big/01/026.jpg","img/big/01/027.jpg",
				 "img/big/01/028.jpg","img/big/01/029.jpg",
				 "img/big/01/030.jpg","img/big/01/031.jpg",
				 "img/big/01/032.jpg","img/big/01/033.jpg",
				 "img/big/01/039.jpg"
				  ],
		name:["那边风景也不错", "迷人的眼睛", "深沉", "先来唱一首", "定住",
		  "怎一个靓字了得", "我show我自己", "黄圣依", "范冰冰", "李念",
		  "演艺才子", "酷不？", "认真的看", "李嘉欣", "李嘉欣",
		  "看这里看这里", "那是什么", "范冰冰", "时装秀", "宁静",
		  "孙俪", "甜美的微笑", "微风轻轻的吹", "开心", "恭喜恭喜",
		  "牛不？", "看一下", "美丽的舒淇", "韩国明星", "韩国明星",
		  "黄奕", "黄奕", "黄奕", "刘亦菲", "黄奕"
			  ]
	},
	{
	Small:[
			 "img/small/02/000.jpg","img/small/02/001.jpg",
			 "img/small/02/002.jpg","img/small/02/003.jpg",
			 "img/small/02/004.jpg","img/small/02/005.jpg",
			 "img/small/02/006.jpg","img/small/02/007.jpg",
			 "img/small/02/008.jpg","img/small/02/009.jpg",
			 "img/small/02/010.jpg","img/small/02/011.jpg",
			 "img/small/02/012.jpg","img/small/02/013.jpg",
			 "img/small/02/014.jpg","img/small/02/015.jpg",
			 "img/small/02/016.jpg","img/small/02/017.jpg",
			 "img/small/02/018.jpg","img/small/02/019.jpg",
			 "img/small/02/020.jpg","img/small/02/021.jpg",
			 "img/small/02/022.jpg","img/small/02/023.jpg",
			 "img/small/02/024.jpg","img/small/02/025.jpg",
			 "img/small/02/026.jpg","img/small/02/027.jpg",
			 "img/small/02/028.jpg","img/small/02/029.jpg",
			 "img/small/02/030.jpg","img/small/02/031.jpg",
			 "img/small/02/032.jpg","img/small/02/033.jpg",
			 "img/small/02/034.jpg"
	],
	Big:[
			 "img/big/02/000.jpg","img/big/02/001.jpg",
			 "img/big/02/002.jpg","img/big/02/003.jpg",
			 "img/big/02/004.jpg","img/big/02/005.jpg",
			 "img/big/02/006.jpg","img/big/02/007.jpg",
			 "img/big/02/008.jpg","img/big/02/009.jpg",
			 "img/big/02/010.jpg","img/big/02/011.jpg",
			 "img/big/02/012.jpg","img/big/02/013.jpg",
			 "img/big/02/014.jpg","img/big/02/015.jpg",
			 "img/big/02/016.jpg","img/big/02/017.jpg",
			 "img/big/02/018.jpg","img/big/02/019.jpg",
			 "img/big/02/020.jpg","img/big/02/021.jpg",
			 "img/big/02/022.jpg","img/big/02/023.jpg",
			 "img/big/02/024.jpg","img/big/02/025.jpg",
			 "img/big/02/026.jpg","img/big/02/027.jpg",
			 "img/big/02/028.jpg","img/big/02/029.jpg",
			 "img/big/02/030.jpg","img/big/02/031.jpg",
			 "img/big/02/032.jpg","img/big/02/033.jpg",
			 "img/big/02/034.jpg"
			  ],
	name:["尊贵", "名车欣赏一", "敞篷", "名车欣赏二", "名车欣赏三",
			  "两款都不错", "名车欣赏四", "名车欣赏五", "速度好快","名车欣赏九",
			  "变形金刚一", "名车欣赏十", "大家都来拍", "名车欣赏七","名车欣赏六", 
			  "变形金刚二", "名车欣赏十一", "变形金刚三", "名车欣赏十二", "够特别",
			  "名车欣赏十三", "名车欣赏十四", "名车欣赏十五", "好快哦", "名车欣赏十七"
		  ]
	},
	{
	Small:[
			 "img/small/03/000.jpg","img/small/03/001.jpg",
			 "img/small/03/002.jpg","img/small/03/003.jpg",
			 "img/small/03/004.jpg","img/small/03/005.jpg",
			 "img/small/03/006.jpg","img/small/03/007.jpg",
			 "img/small/03/008.jpg","img/small/03/009.jpg",
			 "img/small/03/010.jpg","img/small/03/011.jpg",
			 "img/small/03/012.jpg","img/small/03/013.jpg",
			 "img/small/03/014.jpg","img/small/03/015.jpg",
			 "img/small/03/016.jpg","img/small/03/017.jpg",
			 "img/small/03/018.jpg","img/small/03/019.jpg",
			 "img/small/03/020.jpg","img/small/03/021.jpg",
			 "img/small/03/022.jpg","img/small/03/023.jpg",
			 "img/small/03/024.jpg","img/small/03/025.jpg",
			 "img/small/03/026.jpg","img/small/03/027.jpg",
			 "img/small/03/028.jpg","img/small/03/029.jpg",
			 "img/small/03/030.jpg","img/small/03/031.jpg",
			 "img/small/03/032.jpg","img/small/03/033.jpg",
			 "img/small/03/034.jpg"
	],
	Big:[
			 "img/big/03/000.jpg","img/big/03/001.jpg",
			 "img/big/03/002.jpg","img/big/03/003.jpg",
			 "img/big/03/004.jpg","img/big/03/005.jpg",
			 "img/big/03/006.jpg","img/big/03/007.jpg",
			 "img/big/03/008.jpg","img/big/03/009.jpg",
			 "img/big/03/010.jpg","img/big/03/011.jpg",
			 "img/big/03/012.jpg","img/big/03/013.jpg",
			 "img/big/03/014.jpg","img/big/03/015.jpg",
			 "img/big/03/016.jpg","img/big/03/017.jpg",
			 "img/big/03/018.jpg","img/big/03/019.jpg",
			 "img/big/03/020.jpg","img/big/03/021.jpg",
			 "img/big/03/022.jpg","img/big/03/023.jpg",
			 "img/big/03/024.jpg","img/big/03/025.jpg",
			 "img/big/03/026.jpg","img/big/03/027.jpg",
			 "img/big/03/028.jpg","img/big/03/029.jpg",
			 "img/big/03/030.jpg","img/big/03/031.jpg",
			 "img/big/03/032.jpg","img/big/03/033.jpg",
			 "img/big/03/034.jpg"
			  ],
	name:["色彩斑斓", "高速运动", "光", "飘逸", "叶子看世界",
			  "齐心协力", "方圆", "格子空间", "源头", "飞舞",
			  "角落", "干杯", "幻境", "奇思妙想", "自由动态",
			  "沉思", "梦幻世界", "原始森林", "飞翔", "奇异空间",
			  "魔术", "另类", "安静", "变异火烧云", "北极熊",
			  "从天而降", "梦幻世界", "心中的绿色", "奇异四溅", "绿色森林",
			  "野生动物", "盒子", "体验探险", "开始前进", "高楼大厦"
		  ]
	}
	],
	userName:["林瑞东", "樊沃标", "杨海丽"]
};

<!--共享图片－－预览模式-->

shareMode = {info:[
	{name:"名车欣赏", time:"2010.03.15"},//02
	{name:"影视看点", time:"2010.01.22"},//06
	{name:"世界风光", time:"2009.12.09"},//04
	{name:"靓丽明星", time:"2009.11.03"},//01
	{name:"靓丽图库", time:"2010.01.04"},//03
	{name:"户外运动", time:"2009.06.06"}//09
	],
	picArr: [
	   ["img/index/024.jpg", "img/index/023.jpg", "img/index/022.jpg", "img/index/021.jpg"],
	   ["img/index/064.jpg", "img/index/063.jpg", "img/index/062.jpg", "img/index/061.jpg"],
	   ["img/index/044.jpg", "img/index/043.jpg", "img/index/042.jpg", "img/index/041.jpg"],
	   ["img/index/014.jpg", "img/index/013.jpg", "img/index/012.jpg", "img/index/011.jpg"],
	   ["img/index/034.jpg", "img/index/033.jpg", "img/index/032.jpg", "img/index/031.jpg"],
	   ["img/index/094.jpg", "img/index/093.jpg", "img/index/092.jpg", "img/index/091.jpg"]
	]
};


<!--我的收藏－－旋转模式  myBookConter.htm-->
var myBookConter =[
			    {name:"OCN演示二",src:"img/index/091.jpg",		bigPic:"img/big/09/031.jpg"},
			    {name:"会议交流",src:"img/index/092.jpg",		bigPic:"img/big/09/016.jpg"},
				{name:"冬季夕阳",src:"img/index/071.jpg",		bigPic:"img/big/07/030.jpg"},
				{name:"冬日雾凇",src:"img/index/072.jpg", 		bigPic:"img/big/07/026.jpg"},
			    {name:"美轮美奂",src:"img/index/031.jpg",		bigPic:"img/big/03/020.jpg"},
			    {name:"色彩斑斓",src:"img/index/032.jpg",		bigPic:"img/big/03/000.jpg"},
				{name:"欧式建筑",src:"img/index/041.jpg",		bigPic:"img/big/04/008.jpg"},
				{name:"家乡的桥",src:"img/index/042.jpg",		bigPic:"img/big/04/032.jpg"},
			    {name:"高尔夫",src:"img/index/051.jpg",			bigPic:"img/big/05/019.jpg"},
			    {name:"空中造型",src:"img/index/052.jpg",		bigPic:"img/big/05/008.jpg"},
				{name:"功夫熊猫",src:"img/index/061.jpg",		bigPic:"img/big/06/023.jpg"},
				{name:"阿凡达",src:"img/index/062.jpg",		bigPic:"img/big/06/019.jpg"},
				{name:"靓丽冰冰",src:"img/index/013.jpg",		bigPic:"img/big/01/039.jpg"},
				{name:"雪山下的小屋",src:"img/index/043.jpg",		bigPic:"img/big/04/014.jpg"},
				{name:"幕光之城",src:"img/index/064.jpg",		bigPic:"img/big/06/028.jpg"},
				{name:"夕阳西下",src:"img/index/071.jpg",		bigPic:"img/big/07/030.jpg"},
				{name:"OCN演示二",src:"img/index/091.jpg",		bigPic:"img/big/09/007.jpg"},
				{name:"山水相连",src:"img/index/073.jpg",		bigPic:"img/big/07/024.jpg"},
				{name:"水上冲浪",src:"img/index/053.jpg",		bigPic:"img/big/05/027.jpg"},
				{name:"OCN演示二",src:"img/index/091.jpg",		bigPic:"img/big/09/031.jpg"},
				{name:"吉林雾凇",src:"img/index/072.jpg",		bigPic:"img/big/07/026.jpg"},
				{name:"出锅喽",src:"img/index/081.jpg",		bigPic:"img/big/08/032.jpg"},
				{name:"貌似狮子",src:"img/index/074.jpg",		bigPic:"img/big/07/039.jpg"},
				{name:"OCN演示一",src:"img/index/094.jpg",		bigPic:"img/big/09/038.jpg"},
				{name:"看看有啥",src:"img/index/083.jpg",		bigPic:"img/big/08/003.jpg"},
				{name:"机器人总动员",src:"img/index/063.jpg",		bigPic:"img/big/06/032.jpg"},
				{name:"我要飞",src:"img/index/082.jpg",		bigPic:"img/big/08/010.jpg"},
				{name:"会议交流",src:"img/index/092.jpg",		bigPic:"img/big/09/016.jpg"},
				{name:"影视才子",src:"img/index/011.jpg",		bigPic:"img/big/01/010.jpg"},
				{name:"阿凡达",src:"img/index/062.jpg",			bigPic:"img/big/06/019.jpg"}
			   ];

<!--去旅游-->
gotoTrip = {
	Big:[ 	
		"img/big/04/000.jpg","img/big/04/008.jpg",
		"img/big/04/002.jpg","img/big/04/003.jpg",
		"img/big/04/004.jpg","img/big/04/005.jpg",
		"img/big/04/006.jpg","img/big/04/007.jpg"
		], 
	
	Small:[
		    "img/small/04/000.jpg","img/small/04/008.jpg",
			"img/small/04/002.jpg","img/small/04/003.jpg",
			"img/small/04/004.jpg","img/small/04/005.jpg",
			"img/small/04/006.jpg","img/small/04/007.jpg"
		   ]
};
