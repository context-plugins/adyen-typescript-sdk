import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address14Schema, type Address14 } from "./address14.js";

export type Store1 = {
  address?: Address14;
  description?: string;
  inStoreTerminals?: string[];
  merchantAccountCode?: string;
  status?: string;
  store: string;
};

export const store1Schema: Schema<Store1> = s.object<Store1>({
  address: s.optional(s.lazy(() => address14Schema)),
  description: s.optional(s.string()),
  inStoreTerminals: s.optional(s.array(s.string())),
  merchantAccountCode: s.optional(s.string()),
  status: s.optional(s.string()),
  store: s.string(),
});
