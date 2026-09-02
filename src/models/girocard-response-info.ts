import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

export type GirocardResponseInfo = {
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const girocardResponseInfoSchema: Schema<GirocardResponseInfo> = s.object<GirocardResponseInfo>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
});
