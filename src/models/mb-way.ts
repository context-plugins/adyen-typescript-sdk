import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type36Schema, type Type36 } from "./type36.js";

export type MbWay = {
  checkoutAttemptId?: string;
  sdkData?: string;
  shopperEmail: string;
  telephoneNumber: string;
  type?: Type36;
};

export const mbWaySchema: Schema<MbWay> = s.object<MbWay>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperEmail: s.string(),
  telephoneNumber: s.string(),
  type: s.optional(s.lazy(() => type36Schema)),
});
