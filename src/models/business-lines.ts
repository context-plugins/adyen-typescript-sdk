import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessLineSchema, type BusinessLine } from "./business-line.js";

export type BusinessLines = {
  /** List of business lines. */
  businessLines: BusinessLine[];
};

export const businessLinesSchema: Schema<BusinessLines> = s.object<BusinessLines>({
  businessLines: s.array(s.lazy(() => businessLineSchema)),
});
