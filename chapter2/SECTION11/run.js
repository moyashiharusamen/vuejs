const app = new Vue({
    el: '#app',
    mounted: function () {
        console.log(this.$el)
    }
})

const app2 = new Vue({
    el: '#app2',
    mounted: function () {
        console.log(this.$refs.hello)
    }
})

const app3 = new Vue({
    el: '#app3',
    data: {
        show: true
    },
    methods: {
        handleClick: function () {
            let count = this.$refs.count
            if (count) {
                count.innerText = parseInt(count.innerText, 10) + 1
            }
        }
    }
})