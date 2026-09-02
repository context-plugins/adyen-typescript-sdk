import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BsbAccountIdentifier2 = {
  accountNumber: string;
  bsbCode: string;
};

export const bsbAccountIdentifier2Schema: Schema<BsbAccountIdentifier2> = s.object<BsbAccountIdentifier2>({
  accountNumber: s.string(),
  bsbCode: s.string(),
});
