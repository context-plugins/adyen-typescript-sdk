import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HkLocalAccountIdentification = {
  /**
   * The 9- to 17-digit bank account number, without separators or whitespace. Starts with the
   * 3-digit branch code.
   */
  accountNumber: string;
  /** The 3-digit clearing code, without separators or whitespace. */
  clearingCode: string;
  /** **hkLocal** @default "hkLocal" */
  type?: "hkLocal";
};

export const hkLocalAccountIdentificationSchema: Schema<HkLocalAccountIdentification> =
  s.object<HkLocalAccountIdentification>({
    accountNumber: s.string(),
    clearingCode: s.string(),
    type: s.defaulted(s.literal("hkLocal"), "hkLocal"),
  });
