const express = require("express")
const router = express.Router()
const db = require("../models")
const { User } = db
const {Op} = require("sequelize");


router.get("/", (req, res) => {
    User.findAll({}).then((allUsers) => res.json(allUsers))
})

router.post("/", async (req, res) => {  
    await User.create(req.body).then((user) => {
        res.json({
            error: false,
            user
        }).sendStatus(201)
    }).catch((err) => {
        res.json({
            error: true
        }).sendStatus(400)
    })
})

router.post("/login", async (req, res) => {  
    await User.findOne({
    where: {
        [Op.and]: [
            {Email: req.body.Email},
            {Password: req.body.Password}
        ]
    }
    }).then((user) => {
        res.json({
            error: user === null,
            user
        }).sendStatus(201)
    }).catch((err) => {
        res.json({
            error: true
        }).sendStatus(400)
    })
})

router.get("/:id", (req, res) => {
  const { id } = req.params
  User.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404)
    }

    res.json(mpost)
  })
})

router.delete("/:id", (req, res) => {
  const { id } = req.params
  User.findByPk(1).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404)
    }

    mpost.destroy()
    res.sendStatus(204)
  })
})

  
  


  router.put("/:id", (req, res) => {
    const { id } = req.params
    User.findByPk(id).then((mpost) => {
      if (!mpost) {
        return res.sendStatus(404)
      }
  
      mpost.content = req.body.content
      mpost
        .save()
        .then((updatedPost) => {
          res.json(updatedPost)
        })
        .catch((err) => {
          res.status(400).json(err)
        })
    })
  })

module.exports = router