import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type46Schema, type Type46 } from "./type46.js";

export type PseLatam = {
  bank: string;
  checkoutAttemptId?: string;
  clientType: string;
  identification: string;
  identificationType: string;
  sdkData?: string;
  type?: Type46;
};

export const pseLatamSchema: Schema<PseLatam> = s.object<PseLatam>({
  bank: s.string(),
  checkoutAttemptId: s.optional(s.string()),
  clientType: s.string(),
  identification: s.string(),
  identificationType: s.string(),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type46Schema)),
});
