import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BsbAccountIdentifier = {
  accountNumber: string;
  bsbCode: string;
};

export const bsbAccountIdentifierSchema: Schema<BsbAccountIdentifier> = s.object<BsbAccountIdentifier>({
  accountNumber: s.string(),
  bsbCode: s.string(),
});
