import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameLocation2Schema, type NameLocation2 } from "./name-location2.js";

/** Contains information about the merchant. */
export type MerchantData2 = {
  /** The unique identifier of the merchant's acquirer. */
  acquirerId?: string;
  /** The merchant category code. */
  mcc?: string;
  /** The unique identifier of the merchant. */
  merchantId?: string;
  /** Contains the name and location of the merchant. */
  nameLocation?: NameLocation2;
  /** The postal code of the merchant. */
  postalCode?: string;
};

export const merchantData2Schema: Schema<MerchantData2> = s.object<MerchantData2>({
  acquirerId: s.optional(s.string()),
  mcc: s.optional(s.string()),
  merchantId: s.optional(s.string()),
  nameLocation: s.optional(s.lazy(() => nameLocation2Schema)),
  postalCode: s.optional(s.string()),
});
