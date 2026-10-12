import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlLocalAccountIdentification = {
  /**
   * The 26-digit bank account number ([Numer
   * rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or
   * whitespace.
   */
  accountNumber: string;
  /** **plLocal** @default "plLocal" */
  type?: "plLocal";
};

export const plLocalAccountIdentificationSchema: Schema<PlLocalAccountIdentification> =
  s.object<PlLocalAccountIdentification>({
    accountNumber: s.string(),
    type: s.defaulted(s.literal("plLocal"), "plLocal"),
  });
