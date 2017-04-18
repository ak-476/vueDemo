export default {
  post(url, param, successCallback, errorCallback, _self) {
    _self.$http.post(url, param).then(function (response) {
      switch (response.status) {
        case 200:
          successCallback && successCallback(response.data);
          break;
        default:
          errorCallback && errorCallback();
          break;
      }
    })
  }
}
