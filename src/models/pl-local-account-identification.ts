import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlLocalAccountIdentification = {
  accountNumber: string;
  type: "plLocal";
};

export const plLocalAccountIdentificationSchema: Schema<PlLocalAccountIdentification> =
  s.object<PlLocalAccountIdentification>({
    accountNumber: s.string(),
    type: s.literal("plLocal"),
  });
