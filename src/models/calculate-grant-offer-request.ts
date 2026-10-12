import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type CalculateGrantOfferRequest = {
  /**
   * The financing amount that the user selected from a dynamic offer. Adyen uses this amount to
   * calculate a preliminary offer.
   */
  amount: Amount17;
};

export const calculateGrantOfferRequestSchema: Schema<CalculateGrantOfferRequest> =
  s.object<CalculateGrantOfferRequest>({
    amount: amount17Schema,
  });
