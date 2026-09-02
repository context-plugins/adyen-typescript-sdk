import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Passcodes = {
  adminMenuPin?: string;
  refundPin?: string;
  screenLockPin?: string;
  txMenuPin?: string;
};

export const passcodesSchema: Schema<Passcodes> = s.object<Passcodes>({
  adminMenuPin: s.optional(s.string()),
  refundPin: s.optional(s.string()),
  screenLockPin: s.optional(s.string()),
  txMenuPin: s.optional(s.string()),
});
