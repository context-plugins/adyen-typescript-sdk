import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceInfo1Schema, type DeviceInfo1 } from "./device-info1.js";
import { itemSchema, type Item } from "./item.js";
import { status91Schema, type Status91 } from "./status91.js";

export type NetworkToken2 = {
  brandVariant?: string;
  creationDate?: Date;
  device?: DeviceInfo1;
  id?: string;
  paymentInstrumentId?: string;
  status?: Status91;
  tokenLastFour?: string;
  tokenRequestor?: Item;
  type?: string;
};

export const networkToken2Schema: Schema<NetworkToken2> = s.object<NetworkToken2>({
  brandVariant: s.optional(s.string()),
  creationDate: s.optional(s.dateTime()),
  device: s.optional(s.lazy(() => deviceInfo1Schema)),
  id: s.optional(s.string()),
  paymentInstrumentId: s.optional(s.string()),
  status: s.optional(s.lazy(() => status91Schema)),
  tokenLastFour: s.optional(s.string()),
  tokenRequestor: s.optional(s.lazy(() => itemSchema)),
  type: s.optional(s.string()),
});
