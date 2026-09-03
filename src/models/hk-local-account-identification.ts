import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HkLocalAccountIdentification = {
  accountNumber: string;
  clearingCode: string;
  type: "hkLocal";
};

export const hkLocalAccountIdentificationSchema: Schema<HkLocalAccountIdentification> =
  s.object<HkLocalAccountIdentification>({
    accountNumber: s.string(),
    clearingCode: s.string(),
    type: s.literal("hkLocal"),
  });
