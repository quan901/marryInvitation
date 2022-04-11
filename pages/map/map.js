// pages/map/map.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        latitude:23.087691,
        longitude:113.941034,
        markers:[{
            title:'Test',
            iconPath:'/images/navi.png',
            id:0,
            latitude:23.087691,
            longitude:113.941034,
            width:50,
            height:50,
            zIndex:1,
            rotate:45
        },
        {
            iconPath:'/images/navi.png',
            id:1,
            latitude:23.087691,
            longitude:113.941034,
            width:50,
            height:50,
        }
        ]
    }
})