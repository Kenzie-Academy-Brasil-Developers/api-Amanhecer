import { z } from "zod"
import { DeepPartial } from "typeorm"
import { contactSchema, contactSchemaRequest } from "../shemas/contactShemas"


type Tcontact = z.infer<typeof contactSchema>
type TcontactRequest = z.infer<typeof contactSchemaRequest>
type TcontactResponse = z.infer<typeof contactSchema>
type TcontactUpdateRequest = DeepPartial<TcontactRequest>
type TcontactsResponse = z.infer<typeof contactSchema>

export {Tcontact, TcontactRequest, TcontactResponse, TcontactUpdateRequest, TcontactsResponse }