import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Opi = {
  /** Indicates if Pay at table is enabled. */
  enablePayAtTable?: boolean;
  /** The store number to use for Pay at Table. */
  payAtTableStoreNumber?: string;
  /** The URL and port number used for Pay at Table communication. */
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
