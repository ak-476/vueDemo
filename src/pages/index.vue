<template>
  <div>
    <ul>
      <li v-for="v in resultList">
        <div class="userId">
          <img :src="v.titlePic">
          <span>{{ v.name }}</span>
          <button>找ta拍</button>
        </div>
        <div class="keyWord">
          <span v-for="o in v.catalog">{{o.keyWord}}</span>
        </div>
        <div class="content">{{v.title}}</div>
        <div style="overflow-x: auto">
          <div v-if="v.poster.length>1" class="illustratingPicture" :style='{ width: v.poster.length*windowWith + (v.poster.length-1)*5 - (v.poster.length)*40 + "px"}'>
            <div v-for="i in v.poster" :style='{background: "url("+i.picture+") center center no-repeat", width:windowWith - 40 + "px"}'>
            </div>
          </div>
          <div v-if="v.poster.length<2" class="illustratingPicture" style="width: 100%" >
            <div v-for="i in v.poster" :style='{background: "url("+i.picture+") center center no-repeat", width: "100%"}'>
            </div>
          </div>
        </div>

        <div class="operatingButton">
          <span>点赞数： <span style="color: darkblue;font-size: 12px;">{{v.thumbNum}}</span></span>
          <span>分享</span>
          <span>报告</span>
        </div>
      </li>
    </ul>
    <Page-Load :resource_url="resource_url" :reload="reload"  @update="updateResource"></Page-Load>
  </div>
</template>

<script>
  import PageLoad from './../components/pageLoad.vue'
  export default {
    data () {
      return {
        keyword: '',
        resultList:[],
        color:"#000",
        windowWith: window.innerWidth,
        resource_url:'/course/list',
        reload: ''

      }
    },
    mounted(){
      let that = this;
//      that._Util.post('/course/list',{}, (data)=>{
//        console.log(data.data);
//        that.resultList = data.data;
//      }, ()=>{
//
//      }, that)
    },
    methods:{
      updateResource(data) {
        let that = this;
        that.resultList = data;
        console.log(data)
      }
    },
    components:{
      PageLoad
    }
  }
</script>
<style scoped>
  ul{
    margin: 0;
    background:#f2f2f2;
  }
  li{
    overflow: hidden;
    margin-top: 10px;
    background: white;
  }
  li:first-child{
    margin-top: 0;
  }
  .userId{
    overflow: hidden;
    margin:10px 10px;
    position: relative;
    min-height: 40px;
  }
  .userId img{
    overflow: hidden;
    text-align: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;

  }
  .userId span{
    margin-left: 50px;
  }
  .userId button{
    position: absolute;
    right: 0;
    top:0px;
    background: #eb0044;
    text-align: center;
    border-radius: 15px;
    width:70px;
    height: 30px;
    color: #fff;
    font-size: 12px;
  }
  .keyWord{
    margin: 0 10px 10px;
  }
  .keyWord span{
    margin-right: 8px;
    padding: 0 10px;
    color: #b2b2b2;
    border: 1px solid #d9d9d9;
    border-radius: 15px;
    font-size: 12px;
    line-height: 17px;
  }
  .content{
    margin: 3px 0 14px;
    padding: 0 10px;
    font-size: 13px;
    font-weight: 400;
  }
  .illustratingPicture{
    height: 340px;
    overflow: hidden;
  }
  .illustratingPicture div{
    float: left;
    margin-left:5px;
  }
  .illustratingPicture div:first-child{
    margin-left: 0;
  }
  body{
    background: black;
  }
  .operatingButton{
    overflow: hidden;
    padding: 15px 10px;
  }
  .operatingButton>span{
    float: right;
    display: inline-block;
    margin-left: 15px;
    padding: 3px 5px;
    font-size: 12px;
  }
  .illustratingPicture div{
    height: 340px;
    background-position: 50% 50%;
    background-size: cover;
  }
</style>
