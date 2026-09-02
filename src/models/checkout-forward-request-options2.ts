import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutNetworkTokenOption2Schema,
  type CheckoutNetworkTokenOption2,
} from "./checkout-network-token-option2.js";

export type CheckoutForwardRequestOptions2 = {
  accountUpdate?: boolean;
  dryRun?: boolean;
  networkToken?: CheckoutNetworkTokenOption2;
  networkTxReferencePaths?: string[];
  tokenize?: boolean;
  transactionLinkIdPaths?: string[];
};

export const checkoutForwardRequestOptions2Schema: Schema<CheckoutForwardRequestOptions2> =
  s.object<CheckoutForwardRequestOptions2>({
    accountUpdate: s.optional(s.boolean()),
    dryRun: s.optional(s.boolean()),
    networkToken: s.optional(s.lazy(() => checkoutNetworkTokenOption2Schema)),
    networkTxReferencePaths: s.optional(s.array(s.string())),
    tokenize: s.optional(s.boolean()),
    transactionLinkIdPaths: s.optional(s.array(s.string())),
  });
