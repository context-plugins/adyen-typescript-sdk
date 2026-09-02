import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attachmentSchema, type Attachment } from "./attachment.js";
import { attachment1Schema, type Attachment1 } from "./attachment1.js";
import { ownerEntity2Schema, type OwnerEntity2 } from "./owner-entity2.js";
import { type223Schema, type Type223 } from "./type223.js";

export type Document = {
  attachment?: Attachment1;
  attachments?: Attachment[];
  creationDate?: Date;
  description: string;
  expiryDate?: string;
  fileName?: string;
  id?: string;
  issuerCountry?: string;
  issuerState?: string;
  modificationDate?: Date;
  number?: string;
  owner?: OwnerEntity2;
  type: Type223;
};

export const documentSchema: Schema<Document> = s.object<Document>({
  attachment: s.optional(s.lazy(() => attachment1Schema)),
  attachments: s.optional(s.array(s.lazy(() => attachmentSchema))),
  creationDate: s.optional(s.dateTime()),
  description: s.string(),
  expiryDate: s.optional(s.string()),
  fileName: s.optional(s.string()),
  id: s.optional(s.string()),
  issuerCountry: s.optional(s.string()),
  issuerState: s.optional(s.string()),
  modificationDate: s.optional(s.dateTime()),
  number: s.optional(s.string()),
  owner: s.optional(s.lazy(() => ownerEntity2Schema)),
  type: type223Schema,
});
