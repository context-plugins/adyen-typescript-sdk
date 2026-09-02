import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personalDocumentDataSchema, type PersonalDocumentData } from "./personal-document-data.js";

export type ViasPersonalData1 = {
  dateOfBirth?: string;
  documentData?: PersonalDocumentData[];
  nationality?: string;
};

export const viasPersonalData1Schema: Schema<ViasPersonalData1> = s.object<ViasPersonalData1>({
  dateOfBirth: s.optional(s.string()),
  documentData: s.optional(s.array(s.lazy(() => personalDocumentDataSchema))),
  nationality: s.optional(s.string()),
});
