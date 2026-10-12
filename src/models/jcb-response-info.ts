import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

export type JcbResponseInfo = {
  /** MID (Merchant ID) number. */
  midNumber?: string;
  /** Indicates whether the JCB Merchant ID is reused from a previously setup JCB payment method. */
  reuseMidNumber?: boolean;
  /** Specifies the service level (settlement type) of this payment method. */
  serviceLevel?: string;
  /** Information regarding the transaction description. */
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const jcbResponseInfoSchema: Schema<JcbResponseInfo> = s.object<JcbResponseInfo>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.optional(s.boolean()),
  serviceLevel: s.optional(s.string()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
});
