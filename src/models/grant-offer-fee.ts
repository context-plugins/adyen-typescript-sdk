import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type GrantOfferFee = {
  amount: Amount17;
  aprBasisPoints?: number;
};

export const grantOfferFeeSchema: Schema<GrantOfferFee> = s.object<GrantOfferFee>({
  amount: amount17Schema,
  aprBasisPoints: s.optional(s.number()),
});
