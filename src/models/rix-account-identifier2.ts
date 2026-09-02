import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RixAccountIdentifier2 = {
  accountNumber: string;
  clearingNumber: string;
};

export const rixAccountIdentifier2Schema: Schema<RixAccountIdentifier2> = s.object<RixAccountIdentifier2>({
  accountNumber: s.string(),
  clearingNumber: s.string(),
});
