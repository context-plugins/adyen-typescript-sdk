import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentFlowSchema, type PaymentFlow } from "./payment-flow.js";
import { status7Schema, type Status7 } from "./status7.js";
import { viasAddress7Schema, type ViasAddress7 } from "./vias-address7.js";
import { viasPhoneNumber4Schema, type ViasPhoneNumber4 } from "./vias-phone-number4.js";

export type StoreDetail = {
  address: ViasAddress7;
  fullPhoneNumber?: string;
  logo?: string;
  merchantAccount: string;
  merchantCategoryCode: string;
  merchantHouseNumber?: string;
  phoneNumber?: ViasPhoneNumber4;
  shopperInteraction?: PaymentFlow;
  splitConfigurationUuid?: string;
  status?: Status7;
  store?: string;
  storeName?: string;
  storeReference?: string;
  virtualAccount?: string;
  webAddress?: string;
};

export const storeDetailSchema: Schema<StoreDetail> = s.object<StoreDetail>({
  address: viasAddress7Schema,
  fullPhoneNumber: s.optional(s.string()),
  logo: s.optional(s.string()),
  merchantAccount: s.string(),
  merchantCategoryCode: s.string(),
  merchantHouseNumber: s.optional(s.string()),
  phoneNumber: s.optional(s.lazy(() => viasPhoneNumber4Schema)),
  shopperInteraction: s.optional(s.lazy(() => paymentFlowSchema)),
  splitConfigurationUuid: s.optional(s.string()),
  status: s.optional(s.lazy(() => status7Schema)),
  store: s.optional(s.string()),
  storeName: s.optional(s.string()),
  storeReference: s.optional(s.string()),
  virtualAccount: s.optional(s.string()),
  webAddress: s.optional(s.string()),
  _keysMap: {
    splitConfigurationUuid: "splitConfigurationUUID",
  },
});
