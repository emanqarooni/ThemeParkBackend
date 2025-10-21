const router = require("express").Router()
const controller = require("../controllers/ThemePark")

router.get("/", controller.GetThemePark)
router.post("/", controller.CreateThemePark)

router.delete("/:id", controller.DeleteThemePark)
router.get("/games", controller.GetGames)
module.exports = router
