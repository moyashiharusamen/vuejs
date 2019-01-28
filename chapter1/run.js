var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        count: 1,
        list: ['りんご', 'ばなな', 'すいか'],
        show: true
    },
    methods: {
        handClick: function (e) {
            console.log(e.target)
            console.log(this.message)
        }
    }
})