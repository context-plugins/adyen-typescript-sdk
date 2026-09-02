import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personalDocumentDataSchema, type PersonalDocumentData } from "./personal-document-data.js";

export type ViasPersonalData = {
  dateOfBirth?: string;
  documentData?: PersonalDocumentData[];
  nationality?: string;
};

export const viasPersonalDataSchema: Schema<ViasPersonalData> = s.object<ViasPersonalData>({
  dateOfBirth: s.optional(s.string()),
  documentData: s.optional(s.array(s.lazy(() => personalDocumentDataSchema))),
  nationality: s.optional(s.string()),
});
