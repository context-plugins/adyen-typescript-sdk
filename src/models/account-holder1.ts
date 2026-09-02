import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountHolder1 = {
  fullName: string;
};

export const accountHolder1Schema: Schema<AccountHolder1> = s.object<AccountHolder1>({
  fullName: s.string(),
});
