import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PciDocumentInfo = {
  createdAt?: Date;
  id?: string;
  validUntil?: Date;
};

export const pciDocumentInfoSchema: Schema<PciDocumentInfo> = s.object<PciDocumentInfo>({
  createdAt: s.optional(s.dateTime()),
  id: s.optional(s.string()),
  validUntil: s.optional(s.dateTime()),
});
