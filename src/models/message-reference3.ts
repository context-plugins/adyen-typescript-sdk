import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageCategory2Schema, type MessageCategory2 } from "./message-category2.js";

export type MessageReference3 = {
  messageCategory?: MessageCategory2;
  serviceId?: string;
  deviceId?: string;
  saleId?: string;
  poiid?: string;
};

export const messageReference3Schema: Schema<MessageReference3> = s.object<MessageReference3>({
  messageCategory: s.optional(s.lazy(() => messageCategory2Schema)),
  serviceId: s.optional(s.string()),
  deviceId: s.optional(s.string()),
  saleId: s.optional(s.string()),
  poiid: s.optional(s.string()),
  _keysMap: {
    messageCategory: "MessageCategory",
    serviceId: "ServiceID",
    deviceId: "DeviceID",
    saleId: "SaleID",
    poiid: "POIID",
  },
});
