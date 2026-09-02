import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Opi = {
  enablePayAtTable?: boolean;
  payAtTableStoreNumber?: string;
  payAtTableUrl?: string;
};

export const opiSchema: Schema<Opi> = s.object<Opi>({
  enablePayAtTable: s.optional(s.boolean()),
  payAtTableStoreNumber: s.optional(s.string()),
  payAtTableUrl: s.optional(s.string()),
  _keysMap: {
    payAtTableUrl: "payAtTableURL",
  },
});
