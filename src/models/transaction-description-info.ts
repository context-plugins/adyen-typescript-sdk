import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type8Schema, type Type8 } from "./type8.js";

export type TransactionDescriptionInfo = {
  doingBusinessAsName?: string;
  type?: Type8;
};

export const transactionDescriptionInfoSchema: Schema<TransactionDescriptionInfo> =
  s.object<TransactionDescriptionInfo>({
    doingBusinessAsName: s.optional(s.string()),
    type: s.optional(s.lazy(() => type8Schema)),
  });
