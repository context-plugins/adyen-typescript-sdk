import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Summary = {
  legalEntityId: string;
  taxYears: number[];
};

export const summarySchema: Schema<Summary> = s.object<Summary>({
  legalEntityId: s.string(),
  taxYears: s.array(s.number()),
});
