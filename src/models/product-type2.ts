import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of component.
 *
 * For [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), set this
 * to **onboarding**.
 *
 * For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), set
 * this to **platform**.
 */
export const ProductType2 = {
  Onboarding: "onboarding",
  Platform: "platform",
  Bank: "bank",
} as const;
export type ProductType2 = (typeof ProductType2)[keyof typeof ProductType2] | (string & {});

export const productType2Schema: EnumSchema<ProductType2> = s.enumOf<ProductType2>(ProductType2);
