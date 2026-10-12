import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

/** **jcb** details */
export type JcbResponseInfo1 = {
  /** MID (Merchant ID) number. */
  midNumber?: string;
  /** Indicates whether the JCB Merchant ID is reused from a previously setup JCB payment method. */
  reuseMidNumber?: boolean;
  /** Specifies the service level (settlement type) of this payment method. */
  serviceLevel?: string;
  /** Information regarding the transaction description. */
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const jcbResponseInfo1Schema: Schema<JcbResponseInfo1> = s.object<JcbResponseInfo1>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.optional(s.boolean()),
  serviceLevel: s.optional(s.string()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
});
