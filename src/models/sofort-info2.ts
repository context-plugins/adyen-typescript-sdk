import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SofortInfo2 = {
  currencyCode: string;
  logo: string;
};

export const sofortInfo2Schema: Schema<SofortInfo2> = s.object<SofortInfo2>({
  currencyCode: s.string(),
  logo: s.string(),
});
