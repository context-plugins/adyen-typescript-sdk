import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type82, type82Schema } from "./type82.js";

export type SgLocalAccountIdentification = {
  /** The 4- to 19-digit bank account number, without separators or whitespace. */
  accountNumber: string;
  /** The bank's 8- or 11-character BIC or SWIFT code. */
  bic: string;
  /** **sgLocal** @default Type82.SgLocal */
  type?: Type82;
};

export const sgLocalAccountIdentificationSchema: Schema<SgLocalAccountIdentification> =
  s.object<SgLocalAccountIdentification>({
    accountNumber: s.string(),
    bic: s.string(),
    type: s.defaulted(type82Schema, Type82.SgLocal),
  });
