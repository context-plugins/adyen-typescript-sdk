import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AttachmentType = {
  Receipt: "receipt",
  Correspondence: "correspondence",
  Other: "other",
} as const;
export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType] | (string & {});

export const attachmentTypeSchema: EnumSchema<AttachmentType> = s.enumOf<AttachmentType>(AttachmentType);
