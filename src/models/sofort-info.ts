import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SofortInfo = {
  currencyCode: string;
  logo: string;
};

export const sofortInfoSchema: Schema<SofortInfo> = s.object<SofortInfo>({
  currencyCode: s.string(),
  logo: s.string(),
});
