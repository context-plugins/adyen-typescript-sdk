import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NoLocalAccountIdentification = {
  /** The 11-digit bank account number, without separators or whitespace. */
  accountNumber: string;
  /** **noLocal** @default "noLocal" */
  type?: "noLocal";
};

export const noLocalAccountIdentificationSchema: Schema<NoLocalAccountIdentification> =
  s.object<NoLocalAccountIdentification>({
    accountNumber: s.string(),
    type: s.defaulted(s.literal("noLocal"), "noLocal"),
  });
