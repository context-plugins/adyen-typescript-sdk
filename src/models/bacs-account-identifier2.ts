import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BacsAccountIdentifier2 = {
  accountNumber: string;
  sortCode: string;
};

export const bacsAccountIdentifier2Schema: Schema<BacsAccountIdentifier2> = s.object<BacsAccountIdentifier2>({
  accountNumber: s.string(),
  sortCode: s.string(),
});
