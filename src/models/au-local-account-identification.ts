import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuLocalAccountIdentification = {
  /** The bank account number, without separators or whitespace. */
  accountNumber: string;
  /**
   * The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch),
   * without separators or whitespace.
   */
  bsbCode: string;
  /** **auLocal** @default "auLocal" */
  type?: "auLocal";
};

export const auLocalAccountIdentificationSchema: Schema<AuLocalAccountIdentification> =
  s.object<AuLocalAccountIdentification>({
    accountNumber: s.string(),
    bsbCode: s.string(),
    type: s.defaulted(s.literal("auLocal"), "auLocal"),
  });
