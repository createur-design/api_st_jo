const express = require("express");
const router = express.Router();

const dialogController = require("./../../controllers/v1/index.js");

/**
 * @openapi
 * /api/v1/dialog:
 *   get:
 *     summary: Get all dialog
 *     description: Find all dialogs
 *     responses:
 *       200:
 *         description: Returns all dialogs.
 */
router.get("/dialog", dialogController.findAll);
/**
 * @openapi
 * /api/v1/dialog/random:
 *   get:
 *     summary: Get a radom dialog
 *     description: Find a random dialog
 *     responses:
 *       200:
 *         description: Returns a random dialog.
 */
router.get("/dialog/random/", dialogController.findRandom);
/**
 * @openapi
 *paths:
 *  /api/v1/dialog/{dialogId}:
 *    get:
 *      summary: Get dialog by ID
 *      description: Find a dialog by Id
 *      parameters:
 *        - in: path
 *          name: dialogId
 *          required: true
 *      responses:
 *        200:
 *          description: Dialog found
 */
router.get("/dialog/:id", dialogController.findOne);

router.post("/dialog", dialogController.create);

router.delete("/dialog/:id", dialogController.delete);

router.patch("/dialog/:id", dialogController.update);

module.exports = router;
