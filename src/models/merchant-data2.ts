import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameLocation2Schema, type NameLocation2 } from "./name-location2.js";

export type MerchantData2 = {
  acquirerId?: string;
  mcc?: string;
  merchantId?: string;
  nameLocation?: NameLocation2;
  postalCode?: string;
};

export const merchantData2Schema: Schema<MerchantData2> = s.object<MerchantData2>({
  acquirerId: s.optional(s.string()),
  mcc: s.optional(s.string()),
  merchantId: s.optional(s.string()),
  nameLocation: s.optional(s.lazy(() => nameLocation2Schema)),
  postalCode: s.optional(s.string()),
});
