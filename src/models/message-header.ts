import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageCategory1Schema, type MessageCategory1 } from "./message-category1.js";
import { messageClass1Schema, type MessageClass1 } from "./message-class1.js";
import { messageType1Schema, type MessageType1 } from "./message-type1.js";

export type MessageHeader = {
  protocolVersion?: string;
  messageClass: MessageClass1;
  messageCategory: MessageCategory1;
  messageType: MessageType1;
  serviceId?: string;
  deviceId?: string;
  saleId: string;
  poiid: string;
};

export const messageHeaderSchema: Schema<MessageHeader> = s.object<MessageHeader>({
  protocolVersion: s.optional(s.string()),
  messageClass: messageClass1Schema,
  messageCategory: messageCategory1Schema,
  messageType: messageType1Schema,
  serviceId: s.optional(s.string()),
  deviceId: s.optional(s.string()),
  saleId: s.string(),
  poiid: s.string(),
  _keysMap: {
    protocolVersion: "ProtocolVersion",
    messageClass: "MessageClass",
    messageCategory: "MessageCategory",
    messageType: "MessageType",
    serviceId: "ServiceID",
    deviceId: "DeviceID",
    saleId: "SaleID",
    poiid: "POIID",
  },
});
