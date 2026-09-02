import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status41Schema, type Status41 } from "./status41.js";
import {
  storeSplitConfiguration1Schema,
  type StoreSplitConfiguration1,
} from "./store-split-configuration1.js";
import { subMerchantData1Schema, type SubMerchantData1 } from "./sub-merchant-data1.js";
import { updatableAddress1Schema, type UpdatableAddress1 } from "./updatable-address1.js";

export type UpdateStoreRequest = {
  address?: UpdatableAddress1;
  businessLineIds?: string[];
  description?: string;
  externalReferenceId?: string;
  phoneNumber?: string;
  splitConfiguration?: StoreSplitConfiguration1;
  status?: Status41;
  subMerchantData?: SubMerchantData1;
};

export const updateStoreRequestSchema: Schema<UpdateStoreRequest> = s.object<UpdateStoreRequest>({
  address: s.optional(s.lazy(() => updatableAddress1Schema)),
  businessLineIds: s.optional(s.array(s.string())),
  description: s.optional(s.string()),
  externalReferenceId: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  splitConfiguration: s.optional(s.lazy(() => storeSplitConfiguration1Schema)),
  status: s.optional(s.lazy(() => status41Schema)),
  subMerchantData: s.optional(s.lazy(() => subMerchantData1Schema)),
});
