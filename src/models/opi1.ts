import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Opi1 = {
  enablePayAtTable?: boolean;
  payAtTableStoreNumber?: string;
  payAtTableUrl?: string;
};

export const opi1Schema: Schema<Opi1> = s.object<Opi1>({
  enablePayAtTable: s.optional(s.boolean()),
  payAtTableStoreNumber: s.optional(s.string()),
  payAtTableUrl: s.optional(s.string()),
  _keysMap: {
    payAtTableUrl: "payAtTableURL",
  },
});
