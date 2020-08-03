window.Shop = {

    API_URL: "http://localhost:8082",

    getProducts: function () {
        $.ajax({
            method: "GET",
            URL: Shop.API_URL + "/products"
        }).done(function (response) {
            console.log(response);
        })
    },

    getProductHtml: function (product) {
        return ` 
        
        
        `
    }
};

Shop.getProducts();