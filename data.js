
<!--��ҳ�����ݰ���ͼƬ������-->
index = {
	picArr:[//����ͼƬ��·����
			["img/index/013.jpg", "img/index/014.jpg", "img/index/011.jpg"],
			["img/index/093.jpg","img/index/091.jpg", "img/index/094.jpg"],
			["img/index/072.jpg", "img/index/073.jpg", "img/index/074.jpg"],
			["img/index/041.jpg", "img/index/044.jpg", "img/index/043.jpg"],
			["global_tm.gif", "global_tm.gif", "global_tm.gif"]],	
	//�û����� �ҵ���ᣬ�ҵ��ղأ� ����ͼ��,���û�����
	
	itemFocusPic:["icn_set1.png","icn_gx1.png", "icn_photo1.png", "icn_shouc1.png", "icn_zxtk1.png"],//�û����ã��û����� �ҵ���ᣬ�ҵ��ղأ� ����ͼ��, ��ע���ͼƬ�ɲ��Ƕ�Ӧ��
	itemNoFocusPic:["icn_set0.png","icn_gx0.png", "icn_photo0.png", "icn_shouc0.png","icn_zxtk0.png" ],//�޽������Ŀ
	
	textInfo: [			a						//�����ϵ���������
		["��������", "����Ӱ��", "���ղ���"],
		["�߿�����", "�������", "OCNͼƬ��ʾ"],
		["������ڡ", "ɽˮ����", "ò��ʨ��"],
		["�Ǳ�ʽ�Ľ���", "����С��", "ѩɽ�µķ���"],
		["", "", ""]
	],
	url:[
		["picPlay_2.htm?0?34", "picPlay_2.htm?0?9", "picPlay_2.htm?0?10"],	//�û�����
		["picPlay_0.htm?0?7","picPlay_0.htm?0?31", "picPlay_0.htm?0?38"],	//�ҵ����
		["picPlay.htm?3", "picPlay.htm?17", "picPlay.htm?22"],	//�ҵ��ղ�
		["picPlay_1.htm?2?21", "picPlay_1.htm?0?29", "picPlay_1.htm?0?14"]	//����ͼ��
	]
};

<!--�ҵ���ᣭ��תģʽ-->
view_3d = [{"name":"","type":203,"src":"img/00_banner_1.jpg"},{"name":"","type":204,"src":"img/00_banner_2.jpg"},{"name":"","type":205,"src":"img/00_banner_3.jpg"}];

/*[		//�ı��������ƺ�ͼƬ��·��
			    {name:"�ɰ�����",src:"img/index/091.jpg",type:1},
				{name:"Ӱ�Ӻ���",src:"img/index/062.jpg",type:1},
				{name:"������Ӱ",src:"img/index/013.jpg",type:1},
				{name:"�������",src:"img/index/081.jpg",type:0},
				{name:"����֮��",src:"img/index/021.jpg",type:0}
			];
*/
<!--<photoData property=""/>-->
<!--�ҵ���ᣭ��ͼģʽ-->
viewMode = {info:[//
	{name:"Ұ�⽼��", time:"2009.12.09"},//09
	{name:"Ӱ�ӿ���", time:"2010.01.22"},//06
	{name:"��������", time:"2009.11.03"},//01
	{name:"��ɽ��ˮ", time:"2010.01.04"},//08
	{name:"��������", time:"2010.03.15"},//02
	{name:"������", time:"2009.06.06"}//04
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
<!--�ҵ���ᣭ����-->
//��ͼ��ʾ������@��������������������������������������

/*
receive_0 =[
{	//"Ұ�⽼��"09
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
	//�ڶ���  "Ӱ�ӿ���",06
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
	name:["HAPPY FEET", "Ӱ������1", "Ӱ������2", "Ӱ������3", "Ӱ������4",
		  "Ӱ������5", "���Ǻ�Ӱ", "������1", "������2", "������3",
		  "������4", "������5", "������6", "������7", "������8",
		  "������9", "������10", "������11", "������12", "������13",
		  "������14", "��˹ҽ��1", "��˹ҽ��2", "������è", "Ļ��֮��1",
		  "Ļ��֮��2", "Ļ��֮��3", "Ļ��֮��4", "Ļ��֮��5", "Ļ��֮��6",
		  "�������ܶ�Ա1", "�������ܶ�Ա2", "�������ܶ�Ա3", "�������ܶ�Ա4", "�������ܶ�Ա5", 
		  "�������ܶ�Ա6", "�������ܶ�Ա7", "�������ܶ�Ա7", "�������ܶ�Ա7", "�����"
		  ]
},
		//������  "��������",01
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
	name:["�Ǳ߷羰Ҳ����", "���˵��۾�", "���", "������һ��", "��ס",
		  "��һ�������˵�", "��show���Լ�", "��ʥ��", "������", "����",
		  "���ղ���", "�᲻��", "����Ŀ�", "�����", "�����",
		  "�����￴����", "����ʲô", "������", "ʱװ��", "����",
		  "��ٳ", "������΢Ц", "΢������Ĵ�", "����", "��ϲ��ϲ",
		  "ţ����", "��һ��", "���������", "��������", "��������",
		  "����", "����", "����", "�����", "����",
		  "�����", "�����", "�����", "�����", "������"
		  ]
},
		//������  "��ɽ��ˮ",08
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
	name:["׳��", "������һ��", "����������", "������ɶ", "��ȥ����",
		  "�ۣ�����", "��ȥ̽̽", "���", "С��", "ǰ��",
		  "���", "�Ҹ�����", "���˻���", "��ζ", "��ԣ�",
		  "��������", "�ײ�", "���ೢ��", "����ĳ�", "ĸ����ǿ��",
		  "��ӥ̫����", "ѧ���񲻣�", "����", "�Ҳ�������", "����",
		  "������", "����", "������ô��", "����¶һ��", "Ҫ��������",
		  "��ʼ����", "��������", "������", "ʳ��", "ÿ��һ����",
		  "��������ô��", "ůů", "����԰�", "�����ϸ�Ӱ", "��̬����"
		  ]
},
		//������  "��������",02
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
	name:["���", "��������һ", "����", "�������Ͷ�", "����������",
	  "�������", "����������", "����������", "�ٶȺÿ�", "�������;�", 
	  "���ν��һ", "��������ʮ", "��Ҷ�����","����������","����������", 
	  "���ν�ն�", "��������ʮһ", "���ν����", "��������ʮ��", "���ر�",
	  "��������ʮ��", "��������ʮ��", "��������ʮ��", "�ÿ�Ŷ", "��������ʮ��",
	  "��������ʮ��", "��������ʮ��", "�������Ͷ�ʮ", "����", "�������Ͷ�ʮһ",
	  "�������Ͷ�ʮ��", "�������Ͷ�ʮ��", "�������Ͷ�ʮ��", "�������Ͷ�ʮ��", "�������Ͷ�ʮ��",
	  "�������Ͷ�ʮ��", "�������Ͷ�ʮ��", "�������Ͷ�ʮ��", "����������ʮ", "����������ʮһ"
	  ]
},
		//������  "������",04
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
	name:["�����˼�", "�徻����", "ԭʼ����", "�������", "������",
	  "�ܼ��ش�", "С����ˮ�˼�", "Ϫ�߽���", "����ʽ����", "�糵",
	  "��Դ�޴�", "�Ҹ�������", "Ψһ�ĸ�", "ͳһЭ��", "ѩɽ�µķ���",
	  "��ʥ�ĵ���", "����һ��", "ʱ��", "�������", "��ɽ��ˮ",
	  "ˮ������", "����ɽ��", "��������", "��������", "ɽ������",
	  "ˮ��", "ɽˮ����", "ˮ����һ��", "������Դ", "��������",
	  "�ش��ﲩ", "ˮ������", "���ʾ�ɫ", "�������", "�������",
	  "���վ���", "�����˼�", "�ľ���ͣ", "ҹɫ����", "Ϧ������"
	  ]
}

];
*/
<!--����ͼ�⣭��ͼģʽ-->
picMode = {info:[
	{name:"���ҵ���"},//05
	{name:"���ͼ��"},//03
	{name:"Ӱ�Ӻ���"},//06
	{name:"��������"},//02
	{name:"�����Ƽ�"},//01
	{name:"��ɫ����"}//07
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

<!--����ͼ�⣭����-->
picMode_2 = [
	{name:"���޷��", 
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
			[ "�����˼�", "�徻����", "ԭʼ����", "�������", "������",
			  "�ܼ��ش�", "С����ˮ�˼�", "Ϫ�߽���", "����ʽ����", "�糵",
			  "��Դ�޴�", "�Ҹ�������", "Ψһ�ĸ�", "ͳһЭ��", "ѩɽ�µķ���",
			  "��ʥ�ĵ���", "����һ��", "ʱ��", "�������", "��ɽ��ˮ",
			  "ˮ������", "����ɽ��", "��������", "��������", "ɽ������",
			  "ˮ��", "ɽˮ����", "ˮ����һ��", "������Դ", "��������"
			  ]
		},
	{name:"ŷ�޷��",
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
			["�����ĺ�", "ɽ��Ϫˮ", "Ͷ��Ĺ�", "���ķ�Ҷ", "С�ٲ�",
			  "������·", "׳��", "�����ɽ", "Сľ��", "��������",
			  "����", "����", "������·", "�����˸�", "ԭʼɭ��",
			  "Ϫ��С·", "ɽʯˮ·", "��������", "������ɫ", "������Ϣ",
			  "�����ˬ", "��ڡ", "������·", "ɽ·����", "ɽˮ����",
			  "����", "������ڡ", "������ڡ", "��ѩ����", "��ѩ����"
			  ]
	},
	{name:"���޷羰",
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
			["��ɫɭ��", "�����Ľ�", "���е���ɫ", "�λ�����", "�������",
			 "������", "���������", "����", "����", "ħ��",
			 "����ռ�", "����", "ԭʼɭ��", "�λ�����", "��˼", 
			 "���ɶ�̬", "��˼����", "�þ�", "�ɱ�", "����", 
			 "����", "Դͷ", "���ӿռ�", "��Բ", "����Э��", 
			 "Ҷ�ӿ�����", "Ʈ��", "��", "�����˶�", "ɫ�ʰ��", 
			  ]
	},
	{name:"�ձ�����", 
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
			["��ѩ����", "��ѩ����",  "������ڡ", "������ڡ","����",
			 "ɽˮ����", "ɽ·����", "������·", "��ڡ", "�����ˬ",
			 "������Ϣ", "������ɫ", "��������", "ɽʯˮ·", "Ϫ��С·",
			 "ԭʼɭ��", "�����˸�", "������·", "����", "����",
			 "��������", "Сľ��", "�����ɽ", "׳��", "������·",
			 "С�ٲ�", "���ķ�Ҷ", "Ͷ��Ĺ�", "ɽ��Ϫˮ", "�����ĺ�"
			  ]
	},

	{name:"��������", 
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
			[ "��ʥ�ĵ���", "����һ��", "ʱ��", "�������", "��ɽ��ˮ",
			  "ˮ������", "����ɽ��", "��������", "��������", "ɽ������",
			  "ˮ��", "ɽˮ����", "ˮ����һ��", "������Դ", "��������",
			  "�����ĺ�", "ɽ��Ϫˮ", "Ͷ��Ĺ�", "���ķ�Ҷ", "С�ٲ�",
			  "������·", "׳��", "�����ɽ", "Сľ��", "��������",
			  "����", "����", "������·", "�����˸�", "ԭʼɭ��"
			  ]
	}

];

<!--����ͼ�����������-->
receive_1 =  [
	{name:"���ͼ��",
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
			["ɫ�ʰ��", "�����˶�", "��", "Ʈ��", "Ҷ�ӿ�����",
			  "����Э��", "��Բ", "���ӿռ�", "Դͷ", "����",
			  "����", "�ɱ�", "�þ�", "��˼����", "���ɶ�̬",
			  "��˼", "�λ�����", "ԭʼɭ��", "����", "����ռ�",
			  "ħ��", "����", "����", "���������", "������",
			  "�������", "�λ�����", "���е���ɫ", "�����Ľ�", "��ɫɭ��",
			  "Ұ������", "����", "����̽��", "��ʼǰ��", "��¥����",
			  "��������","������", "���ǹ�ϵ", "��", "���ɷ���"
			  ]
	},
	{name:"Ӱ�Ӻ���", 
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
		  "HAPPY FEET", "Ӱ������1", "Ӱ������2", "Ӱ������3", "Ӱ������4",
		  "Ӱ������5", "���Ǻ�Ӱ", "������1", "������2", "������3",
		  "������4", "������5", "������6", "������7", "������8",
		  "������9", "������10", "������11", "������12", "������13",
		  "������14", "��˹ҽ��1", "��˹ҽ��2", "������è", "Ļ��֮��1",
		  "Ļ��֮��2", "Ļ��֮��3", "Ļ��֮��4", "Ļ��֮��5", "Ļ��֮��6",
		  "�������ܶ�Ա1", "�������ܶ�Ա2", "�������ܶ�Ա3", "�������ܶ�Ա4", "�������ܶ�Ա5", 
		  "�������ܶ�Ա6", "�������ܶ�Ա7", "�������ܶ�Ա7", "�������ܶ�Ա7", "�����"
			  ]
	},

	{name:"��������", 
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
			[ "���", "��������һ", "����", "�������Ͷ�", "����������",
			  "�������", "����������", "����������", "����������", "����������",
			  "�ٶȺÿ�", "�������;�", "���ν��һ", "��������ʮ", "��Ҷ�����",
			  "���ν�ն�", "��������ʮһ", "���ν����", "��������ʮ��", "���ر�",
			  "��������ʮ��", "��������ʮ��", "��������ʮ��", "�ÿ�Ŷ", "��������ʮ��",
			  "��������ʮ��", "��������ʮ��", "�������Ͷ�ʮ", "����", "�������Ͷ�ʮһ",
			  "�������Ͷ�ʮ��", "�������Ͷ�ʮ��", "�������Ͷ�ʮ��", "�������Ͷ�ʮ��", "�������Ͷ�ʮ��",
			  "�������Ͷ�ʮ��", "�������Ͷ�ʮ��", "�������Ͷ�ʮ��", "����������ʮ", "����������ʮһ"
			  ]
	},
{name:"�����Ƽ�", 
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
			[ "�Ǳ߷羰Ҳ����", "���˵��۾�", "���", "������һ��", "��ס",
			  "��һ�������˵�", "��show���Լ�", "��ʥ��", "������", "����",
			  "���ղ���", "�᲻��", "����Ŀ�", "�����", "�����",
			  "�����￴����", "����ʲô", "������", "ʱװ��", "����",
			  "��ٳ", "������΢Ц", "΢������Ĵ�", "����", "��ϲ��ϲ",
			  "ţ����", "��һ��", "���������", "��������", "��������",
			  "����", "����", "����", "�����", "����",
			  "�����", "�����", "�����", "�����", "������"
			  ]
	},
	{name:"��ɫ����",
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
			["�����ĺ�", "ɽ��Ϫˮ", "Ͷ��Ĺ�", "���ķ�Ҷ", "С�ٲ�",
			  "������·", "׳��", "�����ɽ", "Сľ��", "��������",
			  "����", "����", "������·", "�����˸�", "ԭʼɭ��",
			  "Ϫ��С·", "ɽʯˮ·", "��������", "������ɫ", "������Ϣ",
			  "�����ˬ", "��ڡ", "������·", "ɽ·����", "ɽˮ����",
			  "����", "������ڡ", "������ڡ", "��ѩ����", "��ѩ����",
			  "Ϧ������", "ѩ��", "�¹�", "��ѩ���", "ɭ��",
			  "��ڡ", "ɽ��", "����", "����", "ò��ʨ��"
			  ]
	}
];




<!--����ͼƬ�������û�-->

//����ͼ��������������������
sharePic = [
{name:"����", pic:[
			 "img/small/01/000.jpg","img/small/01/001.jpg",
			 "img/small/01/002.jpg","img/small/01/003.jpg",
			 "img/small/01/004.jpg","img/small/01/005.jpg"
				 ]
},
{name:"���ֱ�", pic:[
			 "img/small/02/000.jpg","img/small/02/001.jpg",
			 "img/small/02/002.jpg","img/small/02/003.jpg",
			 "img/small/02/004.jpg","img/small/02/005.jpg"
				 ]
},
{name:"���", pic:[
			 "img/small/03/000.jpg","img/small/03/001.jpg",
			 "img/small/03/002.jpg","img/small/03/003.jpg",
			 "img/small/03/004.jpg","img/small/03/005.jpg"
				 ]
}
];

<!--����ͼƬ�������û�  shareUser.htm-->

var shareUser = {//---------------------------�������Сͼһ����35�ţ���ͼ����35���ǿ��Եģ�����һ������ͼ�Ƕ�Ӧ��
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
		name:["�Ǳ߷羰Ҳ����", "���˵��۾�", "���", "������һ��", "��ס",
		  "��һ�������˵�", "��show���Լ�", "��ʥ��", "������", "����",
		  "���ղ���", "�᲻��", "����Ŀ�", "�����", "�����",
		  "�����￴����", "����ʲô", "������", "ʱװ��", "����",
		  "��ٳ", "������΢Ц", "΢������Ĵ�", "����", "��ϲ��ϲ",
		  "ţ����", "��һ��", "���������", "��������", "��������",
		  "����", "����", "����", "�����", "����"
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
	name:["���", "��������һ", "����", "�������Ͷ�", "����������",
			  "�������", "����������", "����������", "�ٶȺÿ�","�������;�",
			  "���ν��һ", "��������ʮ", "��Ҷ�����", "����������","����������", 
			  "���ν�ն�", "��������ʮһ", "���ν����", "��������ʮ��", "���ر�",
			  "��������ʮ��", "��������ʮ��", "��������ʮ��", "�ÿ�Ŷ", "��������ʮ��"
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
	name:["ɫ�ʰ��", "�����˶�", "��", "Ʈ��", "Ҷ�ӿ�����",
			  "����Э��", "��Բ", "���ӿռ�", "Դͷ", "����",
			  "����", "�ɱ�", "�þ�", "��˼����", "���ɶ�̬",
			  "��˼", "�λ�����", "ԭʼɭ��", "����", "����ռ�",
			  "ħ��", "����", "����", "���������", "������",
			  "�������", "�λ�����", "���е���ɫ", "�����Ľ�", "��ɫɭ��",
			  "Ұ������", "����", "����̽��", "��ʼǰ��", "��¥����"
		  ]
	}
	],
	userName:["����", "���ֱ�", "���"]
};

<!--����ͼƬ����Ԥ��ģʽ-->

shareMode = {info:[
	{name:"��������", time:"2010.03.15"},//02
	{name:"Ӱ�ӿ���", time:"2010.01.22"},//06
	{name:"������", time:"2009.12.09"},//04
	{name:"��������", time:"2009.11.03"},//01
	{name:"����ͼ��", time:"2010.01.04"},//03
	{name:"�����˶�", time:"2009.06.06"}//09
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


<!--�ҵ��ղأ�����תģʽ  myBookConter.htm-->
var myBookConter =[
			    {name:"OCN��ʾ��",src:"img/index/091.jpg",		bigPic:"img/big/09/031.jpg"},
			    {name:"���齻��",src:"img/index/092.jpg",		bigPic:"img/big/09/016.jpg"},
				{name:"����Ϧ��",src:"img/index/071.jpg",		bigPic:"img/big/07/030.jpg"},
				{name:"������ڡ",src:"img/index/072.jpg", 		bigPic:"img/big/07/026.jpg"},
			    {name:"������ۼ",src:"img/index/031.jpg",		bigPic:"img/big/03/020.jpg"},
			    {name:"ɫ�ʰ��",src:"img/index/032.jpg",		bigPic:"img/big/03/000.jpg"},
				{name:"ŷʽ����",src:"img/index/041.jpg",		bigPic:"img/big/04/008.jpg"},
				{name:"�������",src:"img/index/042.jpg",		bigPic:"img/big/04/032.jpg"},
			    {name:"�߶���",src:"img/index/051.jpg",			bigPic:"img/big/05/019.jpg"},
			    {name:"��������",src:"img/index/052.jpg",		bigPic:"img/big/05/008.jpg"},
				{name:"������è",src:"img/index/061.jpg",		bigPic:"img/big/06/023.jpg"},
				{name:"������",src:"img/index/062.jpg",		bigPic:"img/big/06/019.jpg"},
				{name:"��������",src:"img/index/013.jpg",		bigPic:"img/big/01/039.jpg"},
				{name:"ѩɽ�µ�С��",src:"img/index/043.jpg",		bigPic:"img/big/04/014.jpg"},
				{name:"Ļ��֮��",src:"img/index/064.jpg",		bigPic:"img/big/06/028.jpg"},
				{name:"Ϧ������",src:"img/index/071.jpg",		bigPic:"img/big/07/030.jpg"},
				{name:"OCN��ʾ��",src:"img/index/091.jpg",		bigPic:"img/big/09/007.jpg"},
				{name:"ɽˮ����",src:"img/index/073.jpg",		bigPic:"img/big/07/024.jpg"},
				{name:"ˮ�ϳ���",src:"img/index/053.jpg",		bigPic:"img/big/05/027.jpg"},
				{name:"OCN��ʾ��",src:"img/index/091.jpg",		bigPic:"img/big/09/031.jpg"},
				{name:"������ڡ",src:"img/index/072.jpg",		bigPic:"img/big/07/026.jpg"},
				{name:"�����",src:"img/index/081.jpg",		bigPic:"img/big/08/032.jpg"},
				{name:"ò��ʨ��",src:"img/index/074.jpg",		bigPic:"img/big/07/039.jpg"},
				{name:"OCN��ʾһ",src:"img/index/094.jpg",		bigPic:"img/big/09/038.jpg"},
				{name:"������ɶ",src:"img/index/083.jpg",		bigPic:"img/big/08/003.jpg"},
				{name:"�������ܶ�Ա",src:"img/index/063.jpg",		bigPic:"img/big/06/032.jpg"},
				{name:"��Ҫ��",src:"img/index/082.jpg",		bigPic:"img/big/08/010.jpg"},
				{name:"���齻��",src:"img/index/092.jpg",		bigPic:"img/big/09/016.jpg"},
				{name:"Ӱ�Ӳ���",src:"img/index/011.jpg",		bigPic:"img/big/01/010.jpg"},
				{name:"������",src:"img/index/062.jpg",			bigPic:"img/big/06/019.jpg"}
			   ];

<!--ȥ����-->
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
