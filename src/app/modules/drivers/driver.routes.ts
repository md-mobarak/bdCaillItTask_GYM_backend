import express from "express";
import { DriverController } from "./driver.controller";
import validateRequest from "../../middlewares/validateUser";
import { driverValidationSchema } from "./driver.validation";
const router = express.Router();

router.get("/", DriverController.getAllFromDB);
router.get("/:id", DriverController.getByIdFromDB);

router.post(
  "/",
  validateRequest(driverValidationSchema.createDriver),
  DriverController.insertIntoDB
);

router.patch("/:id", DriverController.updateOneInDB);

router.delete("/:id", DriverController.deleteByIdFromDB);

export const DriverRoutes = router;