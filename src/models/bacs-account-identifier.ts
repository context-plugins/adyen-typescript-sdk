import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BacsAccountIdentifier = {
  accountNumber: string;
  sortCode: string;
};

export const bacsAccountIdentifierSchema: Schema<BacsAccountIdentifier> = s.object<BacsAccountIdentifier>({
  accountNumber: s.string(),
  sortCode: s.string(),
});
