import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SvsInfo = {
  authorisationMid: string;
  currencyCode: string;
};

export const svsInfoSchema: Schema<SvsInfo> = s.object<SvsInfo>({
  authorisationMid: s.string(),
  currencyCode: s.string(),
});
