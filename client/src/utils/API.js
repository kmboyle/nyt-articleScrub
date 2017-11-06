import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "&api-key=48a4be7acc7344319bd90c8d78a89c08";

export default {
    search: function(query, begin, end) {

        return axios.get(BASEURL + query + "&begin_date=" + begin + "&end_date=" + end + APIKEY);
    },
    searchTermOnly: function(query) {

        return axios.get(BASEURL + query + APIKEY);
    },
    getArticles: function() {
        return axios.get("/api/articles");
    },
    saveArticle: function(articleData) {

        return axios.post("/api/articles", articleData);
    },
    deleteArticle: function(id) {

        return axios.delete("/api/articles/" + id);
    }
};