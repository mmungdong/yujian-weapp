const BASE_URL = "http://127.0.0.1:3306"

class BaseRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method: method,
        data: params,
        success: function(res) {

        },
        fail: function(err) {
            
        }
      })
    })
  }

  get(url, params) {
    return this.request(url, "GET", params)
  }

  post(url, data) {
    return this.request(url, "POST", data)
  }
}

const baseRequest = new BaseRequest()

export default baseRequest