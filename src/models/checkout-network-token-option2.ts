import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The object that contains the details for forwarding a network token. */
export type CheckoutNetworkTokenOption2 = {
  /** Set to **true** to enable forwarding network token cryptograms. */
  includeCryptogram?: boolean;
  /** Set to **true** to forward the network token for a card. */
  useNetworkToken?: boolean;
};

export const checkoutNetworkTokenOption2Schema: Schema<CheckoutNetworkTokenOption2> =
  s.object<CheckoutNetworkTokenOption2>({
    includeCryptogram: s.optional(s.boolean()),
    useNetworkToken: s.optional(s.boolean()),
  });
