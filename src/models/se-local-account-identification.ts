import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type271Schema, type Type271 } from "./type271.js";

export type SeLocalAccountIdentification = {
  accountNumber: string;
  clearingNumber: string;
  type: Type271;
};

export const seLocalAccountIdentificationSchema: Schema<SeLocalAccountIdentification> =
  s.object<SeLocalAccountIdentification>({
    accountNumber: s.string(),
    clearingNumber: s.string(),
    type: type271Schema,
  });
