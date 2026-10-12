import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageCategory1Schema, type MessageCategory1 } from "./message-category1.js";
import { messageClass1Schema, type MessageClass1 } from "./message-class1.js";
import { messageType1Schema, type MessageType1 } from "./message-type1.js";

/**
 * Message header of the Sale to POI protocol message. It conveys Information related to the Sale to
 * POI protocol management.
 */
export type MessageHeader = {
  /** If MessageCategory is Login or Diagnosis. */
  protocolVersion?: string;
  /**
   * Class of the message. Possible values:
   * * **Device**
   * * **Event**
   * * **Service**
   */
  messageClass: MessageClass1;
  /**
   * Category of message. Possible values:
   * * **Abort**
   * * **Admin**
   * * **BalanceInquiry**
   * * **Batch**
   * * **CardAcquisition**
   * * **CardReaderInit**
   * * **CardReaderPowerOff**
   * * **Diagnosis**
   * * **Display**
   * * **EnableService**
   * * **Event**
   * * **GetTotals**
   * * **Input**
   * * **InputUpdate**
   * * **Login**
   * * **Logout**
   * * **Loyalty**
   * * **None**
   * * **PIN**
   * * **Payment**
   * * **Print**
   * * **Reconciliation**
   * * **Reversal**
   * * **Sound**
   * * **StoredValue**
   * * **TransactionStatus**
   * * **Transmit**
   */
  messageCategory: MessageCategory1;
  /**
   * Type of message of the Sale to POI protocol. Possible values:
   * * **Notification**
   * * **Request**
   * * **Response**
   */
  messageType: MessageType1;
  /**
   * Identification of a message pair, which processes a transaction. Required if Service or Event
   * MessageClass message or if Device MessageClass and request from POI or response from Sale.
   */
  serviceId?: string;
  /** Identification of a device message pair. If Device MessageClass. */
  deviceId?: string;
  /** Identification of a Sale System or a Sale Terminal for the Sale to POI protocol. */
  saleId: string;
  /** Identification of a POI System or a POI Terminal for the Sale to POI protocol. */
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
