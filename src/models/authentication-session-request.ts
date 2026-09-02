import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { policy2Schema, type Policy2 } from "./policy2.js";
import { productType2Schema, type ProductType2 } from "./product-type2.js";

export type AuthenticationSessionRequest = {
  allowOrigin: string;
  policy: Policy2;
  product: ProductType2;
};

export const authenticationSessionRequestSchema: Schema<AuthenticationSessionRequest> =
  s.object<AuthenticationSessionRequest>({
    allowOrigin: s.string(),
    policy: policy2Schema,
    product: productType2Schema,
  });
