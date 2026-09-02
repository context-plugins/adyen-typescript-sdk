import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

export type DinersResponseInfo = {
  midNumber?: string;
  reuseMidNumber?: boolean;
  serviceLevel?: string;
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const dinersResponseInfoSchema: Schema<DinersResponseInfo> = s.object<DinersResponseInfo>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.optional(s.boolean()),
  serviceLevel: s.optional(s.string()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
});
