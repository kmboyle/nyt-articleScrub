import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "&api-key=Sp2JcVEAl0G3fBnSmGwNsaTm6nM5u3b5";

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
