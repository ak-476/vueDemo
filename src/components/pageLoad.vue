<template>
  <div class="loadMore" v-if="pageShow">
    <button @click="getMore">点击加载更多</button>
  </div>

</template>
<script type="text/babel">

  export default{
    props: {
      resource_url: {
        type: String,
        required: true
      },
      reload: {
        type: String,
        required: false
      }
    },
    data(){
      return {
        listNum: 5,
        pageShow: true,
        loading: false,
        resultList: []
      }
    },
    mounted(){
      let that = this;
      that.fetchData('', that);
    },

    methods: {
      getList (pageUrl) {
        let that = this;
        that.fetchData(pageUrl, that);
      },
      fetchData (pageUrl, self) {
        let that = self;
        pageUrl = pageUrl || that.resource_url;
        that.loading = true;
        that._Util.post(pageUrl, {}, (data) => {
          that.pageShow = true;
          that.resultList = data.data;
          if(that.resultList.length<6){
            that.pageShow = false;
          }
          that.$options.methods.handleResponseData(that.resultList.slice(0,that.listNum), that);
        }, () => {
        }, that);
      },

      handleResponseData (response, that) {
        that.$emit('update', response);
      },
      getMore(){
          let that = this;
          that.listNum += 5;
          that.$options.methods.handleResponseData(that.resultList.slice(0,that.listNum), that);
          if(that.listNum > that.resultList.length){
            that.pageShow = false;
          }
      }
    }
  }
</script>
<style>
.loadMore button{
  width: 80%;
  margin: 10px 10%;
  padding: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  background-color: #f2f2f2;
}
</style>
