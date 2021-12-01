const articles = require("./article.controller.js");

module.exports = app => {
    const articles = require("./article.controller.js");

    app.post("/articles", articles.create);
    app.get("/articles", articles.findAll);
    app.get("/articles2", articles.findAll);
    app.get("/articles/:articleId", articles.findOne);
    app.put("/articles/:articleId", articles.update);
    app.delete("/articles/:articleId", articles.delete);
    app.delete("/articles", articles.deleteAll);
};