var card = Vue.createApp({
    data() {
        return {
            cards: [], // 初始化 cards 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "/service", // API 路徑
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.cards = results; // 將回傳的資料綁定到 Vue 的 cards
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});

// 掛載 Vue 應用程式到指定的 DOM 元素
card.mount("#test");



var card2 = Vue.createApp({
    data() {
        return {
            tdart: [], // 初始化 cards 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "/tdservice", // API 路徑
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.tdart = results; // 將回傳的資料綁定到 Vue 的 cards
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});

// 掛載 Vue 應用程式到指定的 DOM 元素
card2.mount("#test3d");




var card3 = Vue.createApp({
    data() {
        return {
            testfine: [], // 初始化 cards 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "/fservice", // API 路徑
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.testfine = results; // 將回傳的資料綁定到 Vue 的 cards
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});

// 掛載 Vue 應用程式到指定的 DOM 元素
card3.mount("#testfine");




var card4 = Vue.createApp({
    data() {
        return {
            testphoto: [], // 初始化 cards 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "/pdservice", // API 路徑
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.testphoto = results; // 將回傳的資料綁定到 Vue 的 cards
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});

// 掛載 Vue 應用程式到指定的 DOM 元素
card4.mount("#testphoto");