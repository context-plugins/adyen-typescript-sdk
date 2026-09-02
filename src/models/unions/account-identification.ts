import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  ibanAccountIdentification2Schema,
  type IbanAccountIdentification2,
} from "../iban-account-identification2.js";

export type AccountIdentification = IbanAccountIdentification2 & { type: "iban" };

export const accountIdentificationSchema: Schema<AccountIdentification> =
  s.discriminatedUnion<AccountIdentification>("type", {
    iban: ibanAccountIdentification2Schema,
  });
