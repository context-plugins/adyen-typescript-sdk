import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type291Schema, type Type291 } from "./type291.js";

export type UkLocalAccountIdentification = {
  accountNumber: string;
  sortCode: string;
  type: Type291;
};

export const ukLocalAccountIdentificationSchema: Schema<UkLocalAccountIdentification> =
  s.object<UkLocalAccountIdentification>({
    accountNumber: s.string(),
    sortCode: s.string(),
    type: type291Schema,
  });
