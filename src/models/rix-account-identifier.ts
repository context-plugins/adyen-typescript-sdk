import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RixAccountIdentifier = {
  accountNumber: string;
  clearingNumber: string;
};

export const rixAccountIdentifierSchema: Schema<RixAccountIdentifier> = s.object<RixAccountIdentifier>({
  accountNumber: s.string(),
  clearingNumber: s.string(),
});
