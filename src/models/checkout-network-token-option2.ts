import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutNetworkTokenOption2 = {
  includeCryptogram?: boolean;
  useNetworkToken?: boolean;
};

export const checkoutNetworkTokenOption2Schema: Schema<CheckoutNetworkTokenOption2> =
  s.object<CheckoutNetworkTokenOption2>({
    includeCryptogram: s.optional(s.boolean()),
    useNetworkToken: s.optional(s.boolean()),
  });
