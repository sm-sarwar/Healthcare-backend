import { Router } from "express";
import { specialtyController } from "./specialty.controller";

const router = Router()

router.get("/", specialtyController.getAllSpecialty)
router.post("/", specialtyController.createSpecialty)
router.delete("/:id",specialtyController.deleteSpecialty)

export const specialtyRoutes = router;