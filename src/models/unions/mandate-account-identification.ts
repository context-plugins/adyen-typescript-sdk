import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  ukLocalMandateAccountIdentificationSchema,
  type UkLocalMandateAccountIdentification,
} from "../uk-local-mandate-account-identification.js";

export type MandateAccountIdentification = UkLocalMandateAccountIdentification & { type: "ukLocal" };

export const mandateAccountIdentificationSchema: Schema<MandateAccountIdentification> =
  s.discriminatedUnion<MandateAccountIdentification>("type", {
    ukLocal: ukLocalMandateAccountIdentificationSchema,
  });
