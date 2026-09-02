import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type181Schema, type Type181 } from "./type181.js";

export type CzLocalAccountIdentification = {
  accountNumber: string;
  bankCode: string;
  type: Type181;
};

export const czLocalAccountIdentificationSchema: Schema<CzLocalAccountIdentification> =
  s.object<CzLocalAccountIdentification>({
    accountNumber: s.string(),
    bankCode: s.string(),
    type: type181Schema,
  });
