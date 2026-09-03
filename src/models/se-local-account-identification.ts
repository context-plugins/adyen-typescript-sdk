import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SeLocalAccountIdentification = {
  accountNumber: string;
  clearingNumber: string;
  type: "seLocal";
};

export const seLocalAccountIdentificationSchema: Schema<SeLocalAccountIdentification> =
  s.object<SeLocalAccountIdentification>({
    accountNumber: s.string(),
    clearingNumber: s.string(),
    type: s.literal("seLocal"),
  });
