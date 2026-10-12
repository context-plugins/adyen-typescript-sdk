import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of ShopperIdPaymentMethod, UPIPaymentMethod. */
export type UpiPaymentMethod = {
  type?: string;
  virtualPaymentAddress?: string;
};

export const upiPaymentMethodSchema: Schema<UpiPaymentMethod> = s.object<UpiPaymentMethod>({
  type: s.optional(s.string()),
  virtualPaymentAddress: s.optional(s.string()),
});
