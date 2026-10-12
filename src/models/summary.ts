import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Summary = {
  /** The unique identifier of the legal entity. */
  legalEntityId: string;
  /** The tax years for which the legal entity has a tax form. */
  taxYears: number[];
};

export const summarySchema: Schema<Summary> = s.object<Summary>({
  legalEntityId: s.string(),
  taxYears: s.array(s.int()),
});
