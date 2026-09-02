import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BinDetail = {
  issuerCountry?: string;
};

export const binDetailSchema: Schema<BinDetail> = s.object<BinDetail>({
  issuerCountry: s.optional(s.string()),
});
