import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

export type BcmcResponseInfo = {
  enableBcmcMobile?: boolean;
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const bcmcResponseInfoSchema: Schema<BcmcResponseInfo> = s.object<BcmcResponseInfo>({
  enableBcmcMobile: s.optional(s.boolean()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
});
