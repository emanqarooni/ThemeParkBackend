const router = require("express").Router()
const controller = require("../controllers/ThemePark")

router.get("/", controller.GetThemePark)
router.post("/", controller.CreateThemePark)
router.get("/:id", controller.GetThemeParkById)
router.delete("/:id", controller.DeleteThemePark)
module.exports = router
