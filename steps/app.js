new Vue({
    el: "#app",
    data: {
        title: "План по изучению Vue.js",
        a: 0
    },
    methods: {
        add: function () {
            this.a++;
        },
        zakonchit: function () {
            this.a = 5;
        }
    }
});