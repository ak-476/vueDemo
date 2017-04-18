var Mock = require('mockjs');
//课程
Mock.mock('/course/list', {
  'code':'200',
  'data|10-20':[{
    "id":"@uuid",
    "title": "@csentence",
    "price|1-20": 100,
    "name":'@name',
    "poster|1-3": [{
      "picture":Mock.Random.dataImage('640x960',['300x250', '250x250', '240x400', '336x280',
        '180x150', '720x300', '468x60', '234x60',
        '88x31', '120x90', '120x60', '120x240',
        '125x125', '728x90', '160x600', '120x600',
        '300x600']),
    }],
    "titlePic": "@dataImage",
    "catalog|1-3":[{
      "keyWord":'@cword(3)',
    }],
    "thumbNum|1-100": 100
  }],
  msg:''
});
