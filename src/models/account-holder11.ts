import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountHolder11 = {
  fullName: string;
};

export const accountHolder11Schema: Schema<AccountHolder11> = s.object<AccountHolder11>({
  fullName: s.string(),
});
