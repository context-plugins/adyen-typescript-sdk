import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PciDocumentInfo = {
  /**
   * The date the questionnaire was created, in ISO 8601 extended format. For example,
   * 2022-12-18T10:15:30+01:00
   */
  createdAt?: Date;
  /** The unique identifier of the signed questionnaire. */
  id?: string;
  /**
   * The expiration date of the questionnaire, in ISO 8601 extended format. For example,
   * 2022-12-18T10:15:30+01:00
   */
  validUntil?: Date;
};

export const pciDocumentInfoSchema: Schema<PciDocumentInfo> = s.object<PciDocumentInfo>({
  createdAt: s.optional(s.dateTime()),
  id: s.optional(s.string()),
  validUntil: s.optional(s.dateTime()),
});
