import { Router } from "express";
import { contactDataIsValidMiddleware } from "../middlewares/contactDataIsValid.middleware"
import { contactSchemaUpdate, contactShemaCreate } from "../shemas/contactShemas";
import { contactCreate, contactRemove, contactUpdate, getAllContactsController }  from "../controllers/contactControllers";
import { contactOwnerMiddleware } from "../middlewares/contactOwner.middleware";
import { contactAuthUserMiddleware } from "../middlewares/contactAuthUser.middleware";


export const contactRouter = Router()

contactRouter.use(contactAuthUserMiddleware)
contactRouter.post("", contactDataIsValidMiddleware(contactShemaCreate), contactCreate)
contactRouter.get("", getAllContactsController)
contactRouter.patch("/:id", contactOwnerMiddleware, contactDataIsValidMiddleware(contactSchemaUpdate), contactUpdate)
contactRouter.delete("/:id", contactOwnerMiddleware, contactRemove) 
