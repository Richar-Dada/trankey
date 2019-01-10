var arr_wx = [
['zxcn38','./static/picture/er.jpg'],['zygf63','./static/picture/er7.jpg'],['vcv363','./static/picture/er2.jpg'],['avip066','./static/picture/er4.jpg'],['zygf63','./static/picture/er7.jpg'],['zxcn10','./static/picture/er6.jpg']
]

var wx_index = Math.floor((Math.random()*arr_wx.length));



var stxlwx = arr_wx[wx_index];
var wx = ""+arr_wx[wx_index];
var img = arr_wx[wx_index][1];
var wx_img = "<img width='168' height='168' src='" + img + "'>";

