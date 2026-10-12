import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains the full name of the person or entity that receives the payment funds). */
export type AccountHolder11 = {
  /** Full name of the account holder. */
  fullName: string;
};

export const accountHolder11Schema: Schema<AccountHolder11> = s.object<AccountHolder11>({
  fullName: s.string(),
});
