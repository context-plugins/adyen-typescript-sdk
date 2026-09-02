import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localizedInformation2Schema, type LocalizedInformation2 } from "./localized-information2.js";
import { storeLocation1Schema, type StoreLocation1 } from "./store-location1.js";
import {
  storeSplitConfiguration1Schema,
  type StoreSplitConfiguration1,
} from "./store-split-configuration1.js";
import { subMerchantData1Schema, type SubMerchantData1 } from "./sub-merchant-data1.js";

export type StoreCreationRequest = {
  address: StoreLocation1;
  businessLineIds?: string[];
  description: string;
  externalReferenceId?: string;
  localizedInformation?: LocalizedInformation2;
  phoneNumber: string;
  reference?: string;
  shopperStatement: string;
  splitConfiguration?: StoreSplitConfiguration1;
  subMerchantData?: SubMerchantData1;
};

export const storeCreationRequestSchema: Schema<StoreCreationRequest> = s.object<StoreCreationRequest>({
  address: storeLocation1Schema,
  businessLineIds: s.optional(s.array(s.string())),
  description: s.string(),
  externalReferenceId: s.optional(s.string()),
  localizedInformation: s.optional(s.lazy(() => localizedInformation2Schema)),
  phoneNumber: s.string(),
  reference: s.optional(s.string()),
  shopperStatement: s.string(),
  splitConfiguration: s.optional(s.lazy(() => storeSplitConfiguration1Schema)),
  subMerchantData: s.optional(s.lazy(() => subMerchantData1Schema)),
});
