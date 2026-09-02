import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type48Schema, type Type48 } from "./type48.js";

export type MbWay = {
  checkoutAttemptId?: string;
  sdkData?: string;
  shopperEmail: string;
  telephoneNumber: string;
  type?: Type48;
};

export const mbWaySchema: Schema<MbWay> = s.object<MbWay>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperEmail: s.string(),
  telephoneNumber: s.string(),
  type: s.optional(s.lazy(() => type48Schema)),
});
