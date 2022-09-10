const router = require("express").Router();
const { Post } = require("../models/");


router.get("/", (req, res) => {
   Post.findAll({
     where: {
       userId: req.session.userId
     }
   })
     .then(dbPostData => {
       const posts = dbPostData.map((post) => post.get({ plain: true }));
      
       res.render("all-posts-admin", {
         layout: "dashboard",
         posts
       });
     })
     .catch(err => {
       console.log(err);
       res.redirect("login");
    });
});

router.get("/new", (req, res) => {
    res.render("new-post", {
      layout: "dashboard"
    });
  });
   router.get("/edit/:id", (req, res) => {
    Post.findByPk(req.params.id)
    res.render("edit-post", {
            layout: "dashboard",
            post
          });
 })