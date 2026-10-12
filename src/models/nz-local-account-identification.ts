import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NzLocalAccountIdentification = {
  /**
   * The 15-16 digit bank account number. The first 2 digits are the bank number, the next 4 digits
   * are the branch number, the next 7 digits are the account number, and the final 2-3 digits are
   * the suffix.
   */
  accountNumber: string;
  /** **nzLocal** @default "nzLocal" */
  type?: "nzLocal";
};

export const nzLocalAccountIdentificationSchema: Schema<NzLocalAccountIdentification> =
  s.object<NzLocalAccountIdentification>({
    accountNumber: s.string(),
    type: s.defaulted(s.literal("nzLocal"), "nzLocal"),
  });
