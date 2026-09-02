import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address11Schema, type Address11 } from "./address11.js";

export type BillingEntity = {
  address?: Address11;
  email?: string;
  id?: string;
  name?: string;
  taxId?: string;
};

export const billingEntitySchema: Schema<BillingEntity> = s.object<BillingEntity>({
  address: s.optional(s.lazy(() => address11Schema)),
  email: s.optional(s.string()),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  taxId: s.optional(s.string()),
});
