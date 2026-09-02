import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { store1Schema, type Store1 } from "./store1.js";

export type MerchantAccount = {
  inStoreTerminals?: string[];
  inventoryTerminals?: string[];
  merchantAccount: string;
  stores?: Store1[];
};

export const merchantAccountSchema: Schema<MerchantAccount> = s.object<MerchantAccount>({
  inStoreTerminals: s.optional(s.array(s.string())),
  inventoryTerminals: s.optional(s.array(s.string())),
  merchantAccount: s.string(),
  stores: s.optional(s.array(s.lazy(() => store1Schema))),
});
