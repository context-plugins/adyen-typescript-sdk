import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AttachmentType1 = {
  Receipt: "receipt",
  Correspondence: "correspondence",
  Other: "other",
} as const;
export type AttachmentType1 = (typeof AttachmentType1)[keyof typeof AttachmentType1] | (string & {});

export const attachmentType1Schema: EnumSchema<AttachmentType1> = s.enumOf<AttachmentType1>(AttachmentType1);
