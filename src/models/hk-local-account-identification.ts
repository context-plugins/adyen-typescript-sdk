import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type201Schema, type Type201 } from "./type201.js";

export type HkLocalAccountIdentification = {
  accountNumber: string;
  clearingCode: string;
  type: Type201;
};

export const hkLocalAccountIdentificationSchema: Schema<HkLocalAccountIdentification> =
  s.object<HkLocalAccountIdentification>({
    accountNumber: s.string(),
    clearingCode: s.string(),
    type: type201Schema,
  });
