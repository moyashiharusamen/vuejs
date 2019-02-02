var state = { count: 0 };

var vm2 = new Vue({
    el: '#app2',
    data: {
        message: state,
        newTodo: '',
        visitCount: 0,
        hideComplateTodos: false,
        todos: [],
        error: null
    }
});

state.count++;

var app3 = new Vue({
    el: '#app3',
    data: {
        message: {
            value: 'Hello Vue.js!'
        },
        list: ['りんご', 'ばなな', 'すいか'],
        num: 1,
        scroll: 0
    },
    mounted: function () {
        this.scroll = 100
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        count: 0
    },
    methods: {
        increment: function () {
            this.count += 1
        },
        decrement: function () {
            this.count -= 1
        }
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        isChild: true,
        isActive: true,
        textColor: 'white',
        bgColor: 'tomato',

        classObject: {
            child: true,
            'is-active': false
        },
        styleObject: {
            color: 'white',
            backgroundColor: 'tomato'
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
        item: {
            id: 1,
            src: 'item1.jpg',
            alt: '商品サムネイル',
            width: 200,
            height: 200
        }
    }
})

var app7 = new Vue({
    el: '#app7',
    data: {
        radius: 50
    }
})

const app8 = new Vue({
    el: "#app8",
    data: {
        name: 'キマイラ',
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ],
        text: 'Vue'
    },
    methods: {
        doAdd: function () {
            const max = this.list.reduce(function (a, b) {
                return a > b.id ? a : b.id
            }, 0)
            this.list.push({
                id: max + 1,
                name: this.name,
                hp: Math.floor(Math.random() * 1000)
            })
        },
        doRemove: function (index) {
            this.list.splice(index, 1)
        },
        rewrite: function () {
            // this.list[0] = { id: 1, name: 'hoge', hp: 10000 }
            this.$set(this.list, 0, { id: 1, name: 'hoge', hp: 10000 })
        },
        created: function () {
            this.list.forEach(function (item) {
                this.$set(item, 'active', false)
            }, this)
        },
        doAttack: function (index) {
            if (this.list[index].hp > 0) {
                this.list[index].hp -= 10
            }
        }
    }
})

// const app9 = new Vue({
//     el: '#app9',
//     data: {
//         list: []
//     },
//     created: function () {
//         axios.get('list.json').then(function (response) {
//             this.list = response.data
//         }.bind(this)).catch(function (e) {
//             console.error(e)
//         })
//     }
// })