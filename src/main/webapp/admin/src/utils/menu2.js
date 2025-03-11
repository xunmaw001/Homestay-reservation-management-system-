const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"餐饮管理",
                        "menuJump":"列表",
                        "tableName":"canyin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"餐饮评价管理",
                        "menuJump":"列表",
                        "tableName":"canyinCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"餐饮留言管理",
                        "menuJump":"列表",
                        "tableName":"canyinLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"餐饮收藏管理",
                        "menuJump":"列表",
                        "tableName":"canyinCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"餐饮订单管理",
                        "menuJump":"列表",
                        "tableName":"canyinOrder"
                    }
                ],
                "menu":"餐饮管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"餐饮类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryCanyin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改"
                        ],
                        "menu":"会员等级类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryHuiyuandengji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"景点类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJingdian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"景点星级管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJingdianXingji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"旅游路线类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryLvyouluxian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"民宿类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryMinsu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"单页数据类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionarySingleSeach"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"特产类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryTechan"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"景点管理",
                        "menuJump":"列表",
                        "tableName":"jingdian"
                    }
                ],
                "menu":"景点管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"旅游路线管理",
                        "menuJump":"列表",
                        "tableName":"lvyouluxian"
                    }
                ],
                "menu":"旅游路线管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"民宿管理",
                        "menuJump":"列表",
                        "tableName":"minsu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"民宿评价管理",
                        "menuJump":"列表",
                        "tableName":"minsuCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"民宿留言管理",
                        "menuJump":"列表",
                        "tableName":"minsuLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"民宿收藏管理",
                        "menuJump":"列表",
                        "tableName":"minsuCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"民宿订单管理",
                        "menuJump":"列表",
                        "tableName":"minsuOrder"
                    }
                ],
                "menu":"民宿管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"单页数据管理",
                        "menuJump":"列表",
                        "tableName":"singleSeach"
                    }
                ],
                "menu":"单页数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"特产管理",
                        "menuJump":"列表",
                        "tableName":"techan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"特产评价管理",
                        "menuJump":"列表",
                        "tableName":"techanCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"特产留言管理",
                        "menuJump":"列表",
                        "tableName":"techanLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"特产收藏管理",
                        "menuJump":"列表",
                        "tableName":"techanCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"特产订单管理",
                        "menuJump":"列表",
                        "tableName":"techanOrder"
                    }
                ],
                "menu":"特产管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
]
    }
}
export default menu;
