import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssociatedPaymentMethod = {
  enabled: boolean;
  id: string;
  type: string;
};

export const associatedPaymentMethodSchema: Schema<AssociatedPaymentMethod> =
  s.object<AssociatedPaymentMethod>({
    enabled: s.boolean(),
    id: s.string(),
    type: s.string(),
  });
