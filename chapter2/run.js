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