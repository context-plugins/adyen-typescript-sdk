import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SvsInfo2 = {
  authorisationMid: string;
  currencyCode: string;
};

export const svsInfo2Schema: Schema<SvsInfo2> = s.object<SvsInfo2>({
  authorisationMid: s.string(),
  currencyCode: s.string(),
});
