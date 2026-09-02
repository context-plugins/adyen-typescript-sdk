import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type141Schema, type Type141 } from "./type141.js";

export type BrLocalAccountIdentification = {
  accountNumber: string;
  bankCode: string;
  branchNumber: string;
  ispb?: string;
  type: Type141;
};

export const brLocalAccountIdentificationSchema: Schema<BrLocalAccountIdentification> =
  s.object<BrLocalAccountIdentification>({
    accountNumber: s.string(),
    bankCode: s.string(),
    branchNumber: s.string(),
    ispb: s.optional(s.string()),
    type: type141Schema,
  });
