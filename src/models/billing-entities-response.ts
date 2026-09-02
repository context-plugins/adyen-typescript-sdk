import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingEntitySchema, type BillingEntity } from "./billing-entity.js";

export type BillingEntitiesResponse = {
  data?: BillingEntity[];
};

export const billingEntitiesResponseSchema: Schema<BillingEntitiesResponse> =
  s.object<BillingEntitiesResponse>({
    data: s.optional(s.array(s.lazy(() => billingEntitySchema))),
  });
