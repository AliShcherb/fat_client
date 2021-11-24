
 const Article = require("./articles.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Error! Empty content"
        });
    }

    const article = new Article({
        author: req.body.author,
        text: req.body.text,
    });

    Article.create(article, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Error while creating"
            });
        else res.send(data);
    });
};
exports.findAll = (req, res) => {
    Article.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Error while retrieving"
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Article.findById(req.params.articleId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Article with id ${req.params.articleId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error while retrieving Article with id " + req.params.articleId
                });
            }
        } else res.send(data);
    });
};


exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Error! Empty content"
        });
    }

    Article.updateById(
        req.params.articleId,
        new Article(req.body),
        (err, data) => {

            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Article with id ${req.params.articleId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error while updating Article with id " + req.params.articleId
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Article.remove(req.params.articleId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Article with id ${req.params.articleId}.`
                });
            } else {
                res.status(500).send({
                    message: "Can not delete Article with id " + req.params.articleId
                });
            }
        } else res.send({ message: `Successful removal` });
    });
};

exports.deleteAll = (req, res) => {
    Article.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Error while removing all articles."
            });
        else res.send({ message: `Successful removal of all articles` });
    });
};
