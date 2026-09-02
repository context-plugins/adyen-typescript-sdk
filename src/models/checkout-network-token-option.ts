import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutNetworkTokenOption = {
  includeCryptogram?: boolean;
  useNetworkToken?: boolean;
};

export const checkoutNetworkTokenOptionSchema: Schema<CheckoutNetworkTokenOption> =
  s.object<CheckoutNetworkTokenOption>({
    includeCryptogram: s.optional(s.boolean()),
    useNetworkToken: s.optional(s.boolean()),
  });
