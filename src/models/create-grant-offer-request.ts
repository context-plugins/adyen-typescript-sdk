import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type CreateGrantOfferRequest = {
  /**
   * The financing amount that the user selected from the dynamic offer. Adyen uses this amount to
   * create a static offer.
   */
  amount: Amount17;
};

export const createGrantOfferRequestSchema: Schema<CreateGrantOfferRequest> =
  s.object<CreateGrantOfferRequest>({
    amount: amount17Schema,
  });
