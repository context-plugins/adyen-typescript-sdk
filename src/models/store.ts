import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links7Schema, type Links7 } from "./links7.js";
import { localizedInformation4Schema, type LocalizedInformation4 } from "./localized-information4.js";
import { status11Schema, type Status11 } from "./status11.js";
import { storeLocation1Schema, type StoreLocation1 } from "./store-location1.js";
import {
  storeSplitConfiguration1Schema,
  type StoreSplitConfiguration1,
} from "./store-split-configuration1.js";
import { subMerchantData1Schema, type SubMerchantData1 } from "./sub-merchant-data1.js";

export type Store = {
  links?: Links7;
  address?: StoreLocation1;
  businessLineIds?: string[];
  description?: string;
  externalReferenceId?: string;
  id?: string;
  localizedInformation?: LocalizedInformation4;
  merchantId?: string;
  phoneNumber?: string;
  reference?: string;
  shopperStatement?: string;
  splitConfiguration?: StoreSplitConfiguration1;
  status?: Status11;
  subMerchantData?: SubMerchantData1;
};

export const storeSchema: Schema<Store> = s.object<Store>({
  links: s.optional(s.lazy(() => links7Schema)),
  address: s.optional(s.lazy(() => storeLocation1Schema)),
  businessLineIds: s.optional(s.array(s.string())),
  description: s.optional(s.string()),
  externalReferenceId: s.optional(s.string()),
  id: s.optional(s.string()),
  localizedInformation: s.optional(s.lazy(() => localizedInformation4Schema)),
  merchantId: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  reference: s.optional(s.string()),
  shopperStatement: s.optional(s.string()),
  splitConfiguration: s.optional(s.lazy(() => storeSplitConfiguration1Schema)),
  status: s.optional(s.lazy(() => status11Schema)),
  subMerchantData: s.optional(s.lazy(() => subMerchantData1Schema)),
  _keysMap: {
    links: "_links",
  },
});
