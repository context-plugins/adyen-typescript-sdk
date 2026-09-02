import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type331Schema, type Type331 } from "./type331.js";

export type Device = {
  id?: string;
  name?: string;
  paymentInstrumentId?: string;
  type?: Type331;
};

export const deviceSchema: Schema<Device> = s.object<Device>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  paymentInstrumentId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type331Schema)),
});
