import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type8Schema, type Type8 } from "./type8.js";

export type TransactionDescriptionResponseInfo1 = {
  doingBusinessAsName?: string;
  type?: Type8;
};

export const transactionDescriptionResponseInfo1Schema: Schema<TransactionDescriptionResponseInfo1> =
  s.object<TransactionDescriptionResponseInfo1>({
    doingBusinessAsName: s.optional(s.string()),
    type: s.optional(s.lazy(() => type8Schema)),
  });
