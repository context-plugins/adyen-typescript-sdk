import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CzLocalAccountIdentification = {
  accountNumber: string;
  bankCode: string;
  type: "czLocal";
};

export const czLocalAccountIdentificationSchema: Schema<CzLocalAccountIdentification> =
  s.object<CzLocalAccountIdentification>({
    accountNumber: s.string(),
    bankCode: s.string(),
    type: s.literal("czLocal"),
  });
