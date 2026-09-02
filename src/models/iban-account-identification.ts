import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type221Schema, type Type221 } from "./type221.js";

export type IbanAccountIdentification = {
  bic?: string;
  iban: string;
  type: Type221;
};

export const ibanAccountIdentificationSchema: Schema<IbanAccountIdentification> =
  s.object<IbanAccountIdentification>({
    bic: s.optional(s.string()),
    iban: s.string(),
    type: type221Schema,
  });
