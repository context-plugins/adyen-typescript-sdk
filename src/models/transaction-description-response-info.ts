import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type8Schema, type Type8 } from "./type8.js";

export type TransactionDescriptionResponseInfo = {
  doingBusinessAsName?: string;
  type?: Type8;
};

export const transactionDescriptionResponseInfoSchema: Schema<TransactionDescriptionResponseInfo> =
  s.object<TransactionDescriptionResponseInfo>({
    doingBusinessAsName: s.optional(s.string()),
    type: s.optional(s.lazy(() => type8Schema)),
  });
