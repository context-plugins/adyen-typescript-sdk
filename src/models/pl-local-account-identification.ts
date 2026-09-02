import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type261Schema, type Type261 } from "./type261.js";

export type PlLocalAccountIdentification = {
  accountNumber: string;
  type: Type261;
};

export const plLocalAccountIdentificationSchema: Schema<PlLocalAccountIdentification> =
  s.object<PlLocalAccountIdentification>({
    accountNumber: s.string(),
    type: type261Schema,
  });
