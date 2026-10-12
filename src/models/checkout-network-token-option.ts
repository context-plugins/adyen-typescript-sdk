import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutNetworkTokenOption = {
  /** Set to **true** to enable forwarding network token cryptograms. */
  includeCryptogram?: boolean;
  /** Set to **true** to forward the network token for a card. */
  useNetworkToken?: boolean;
};

export const checkoutNetworkTokenOptionSchema: Schema<CheckoutNetworkTokenOption> =
  s.object<CheckoutNetworkTokenOption>({
    includeCryptogram: s.optional(s.boolean()),
    useNetworkToken: s.optional(s.boolean()),
  });
