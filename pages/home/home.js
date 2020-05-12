Page ({
    data: {
      name: '黎明',
      person: [
        {id: 1, name: 'zs', age: 15},
        {id: 2, name: 'ls', age: 16},
        {id: 3, name: 'ww', age: 18},
        {id: 4, name: 'sc', age: 20},
      ],
      counter: 0,
      list: []
    },
    add () {
      // this.data.counter += 1
      this.setData({
        counter: this.data.counter + 1
       })
      
    },
    red () {
      // this.data.counter += 1
      this.setData({
        counter: this.data.counter - 1
       })
      
    },
    handleUserInfo(event) {
      console.log(event);
      
    },
   
    onLoad() {
      // console.log('success');
      
      wx.request({
        url: 'http://localhost:3000/',
        success: (res) => {
          
          const data = res
          this.setData({
            list: data.data
           })
          // console.log(data);
        }
      })
    },
     //监听页面滚动
     onPageScroll(e) {
      //  console.log(e);
       
     }
    
  })