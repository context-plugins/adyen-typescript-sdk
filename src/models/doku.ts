import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type23Schema, type Type23 } from "./type23.js";

export type Doku = {
  checkoutAttemptId?: string;
  firstName: string;
  lastName: string;
  sdkData?: string;
  shopperEmail: string;
  type: Type23;
};

export const dokuSchema: Schema<Doku> = s.object<Doku>({
  checkoutAttemptId: s.optional(s.string()),
  firstName: s.string(),
  lastName: s.string(),
  sdkData: s.optional(s.string()),
  shopperEmail: s.string(),
  type: type23Schema,
});
