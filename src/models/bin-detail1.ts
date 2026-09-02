import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BinDetail1 = {
  issuerCountry?: string;
};

export const binDetail1Schema: Schema<BinDetail1> = s.object<BinDetail1>({
  issuerCountry: s.optional(s.string()),
});
