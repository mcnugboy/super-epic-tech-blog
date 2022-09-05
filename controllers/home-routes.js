const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

router.get("/", (req, res) => {
    Post.findAll({
        include: [User],
    })
    .then((dbPostData) => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render("all-posts", { posts });
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

router.get("/post/:id", (req, res) => {
    Post.findByPk(req.params.id, { })
    res.render("single-post", { post });
});

router.get("/login", (req, res) => {
    if (req.session.loggedin) {
        res.redirect("/");
        return;
    }

    res.render("login");
});

module.exports = router;