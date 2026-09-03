import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IbanAccountIdentification = {
  bic?: string;
  iban: string;
  type: "iban";
};

export const ibanAccountIdentificationSchema: Schema<IbanAccountIdentification> =
  s.object<IbanAccountIdentification>({
    bic: s.optional(s.string()),
    iban: s.string(),
    type: s.literal("iban"),
  });
