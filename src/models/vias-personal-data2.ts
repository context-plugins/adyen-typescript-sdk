import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personalDocumentDataSchema, type PersonalDocumentData } from "./personal-document-data.js";

/** Personal information of the individual. */
export type ViasPersonalData2 = {
  /** The person's date of birth, in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**. */
  dateOfBirth?: string;
  /**
   * Array that contains information about the person's identification document. You can submit only
   * one entry per document type.
   */
  documentData?: PersonalDocumentData[];
  /**
   * The nationality of the person represented by a two-character country code, in [ISO 3166-1
   * alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.
   */
  nationality?: string;
};

export const viasPersonalData2Schema: Schema<ViasPersonalData2> = s.object<ViasPersonalData2>({
  dateOfBirth: s.optional(s.string()),
  documentData: s.optional(s.array(s.lazy(() => personalDocumentDataSchema))),
  nationality: s.optional(s.string()),
});
