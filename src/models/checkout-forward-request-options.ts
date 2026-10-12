import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutNetworkTokenOption2Schema,
  type CheckoutNetworkTokenOption2,
} from "./checkout-network-token-option2.js";

export type CheckoutForwardRequestOptions = {
  /** Whether to check for a card account update (true) or not (false) */
  accountUpdate?: boolean;
  /**
   * Set to **true** to receive a copy of the request Adyen is making to the third party in the
   * response. Any sensitive information will be masked in the response you receive. This
   * functionality is only available in the test environment.
   */
  dryRun?: boolean;
  /** The object that contains the details for forwarding a network token. */
  networkToken?: CheckoutNetworkTokenOption2;
  /**
   * Set in tokenize:true case when forwarding PAN. Addresses to the possible location(s) of
   * networkTxReference in the incoming 3rd party response
   */
  networkTxReferencePaths?: string[];
  /**
   * Set to **true**, the payment details are
   * [tokenized](https://docs.adyen.com/online-payments/tokenization).
   */
  tokenize?: boolean;
  /**
   * Set in tokenize:true case when forwarding PAN. Addresses to the possible location(s) of
   * transactionLinkId in the incoming 3rd party response
   */
  transactionLinkIdPaths?: string[];
};

export const checkoutForwardRequestOptionsSchema: Schema<CheckoutForwardRequestOptions> =
  s.object<CheckoutForwardRequestOptions>({
    accountUpdate: s.optional(s.boolean()),
    dryRun: s.optional(s.boolean()),
    networkToken: s.optional(s.lazy(() => checkoutNetworkTokenOption2Schema)),
    networkTxReferencePaths: s.optional(s.array(s.string())),
    tokenize: s.optional(s.boolean()),
    transactionLinkIdPaths: s.optional(s.array(s.string())),
  });
