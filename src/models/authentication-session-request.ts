import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { policy2Schema, type Policy2 } from "./policy2.js";
import { productType2Schema, type ProductType2 } from "./product-type2.js";

export type AuthenticationSessionRequest = {
  /**
   * The URL where the component will appear. In your live environment, you must protect the URL
   * with an SSL certificate and ensure that it starts with `https://`.
   */
  allowOrigin: string;
  /**
   * An object that contains a description of the allowed resources and roles for the requested
   * session.
   */
  policy: Policy2;
  /**
   * The type of component.
   *
   * For [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), set
   * this to **onboarding**.
   *
   * For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards),
   * set this to **platform**.
   */
  product: ProductType2;
};

export const authenticationSessionRequestSchema: Schema<AuthenticationSessionRequest> =
  s.object<AuthenticationSessionRequest>({
    allowOrigin: s.string(),
    policy: policy2Schema,
    product: productType2Schema,
  });
