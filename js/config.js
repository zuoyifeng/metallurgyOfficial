/*javascript配置文件*/
var GLOBAL_DEBUG = true;//是否本地调试，true本地调试,false生产环境
var GLOBAL_IMGS_URL = 'imgs/';//图片路径

//后台ajax请求地址
var GLOBAL_AJAX_URL = {
    economic_steelpmi: '/metallurgy/macroeconomic/steelpmi',//钢铁PMI
	economic_steelpmiExcel: '/metallurgy/macroeconomic/steelpmiexcel',//钢铁PMI-图表导出表格
};
//模拟的JSON数据
var GLOBAL_JSON = {
    
    //钢铁PMI
    economic_steelpmi: {
        "status": true,
        "httpstatus": 200,
        "error_code": 0,
        "messages": "查询成功",
        "data": {
            "xaxis": ['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月'],
            "pmiindex": [46.7,49,49.7,57.3,50.9,45.1,50.2,50.1,49.5,50.7],
            "productindex": [45.6,49.5,49.8,60.4,53.7,42.5,50.1,50.5,50.2,50.7],
            "neworderindex": [49.9,50.9,53.3,65.6,52.7,43.3,50.5,52.1,49.2,54.6],
            "storeindix": [34.4,44.8,37.7,34.9,50.2,49.3,52,49.6,52.5,48.4],
            "material_import_index": [52.5, 52.4, 51.9, 53.0, 53.3, 54.5, 54.1, 54.6, 53.8, 52.3],
            "exportorderindex": [50.7,46.2,36.9,52.5,58.1,51.3,55.7,57,49.8,48]
        }
    }
    
};
