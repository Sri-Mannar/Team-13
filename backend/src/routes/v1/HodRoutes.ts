import express from "express";
import { HodController } from "../../controllers/index";

const router=express.Router()

router.get("/getall",HodController.getAll);
router.post("/",HodController.createHod);
router.get("/:ID",HodController.getHodById);
router.put("/update/:ID",HodController.updateHodById);
router.delete("/delete/:ID",HodController.deleteHodById);

export default router;