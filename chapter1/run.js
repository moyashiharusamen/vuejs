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
});

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