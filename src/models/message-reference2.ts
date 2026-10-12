import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageCategory2Schema, type MessageCategory2 } from "./message-category2.js";

/** Identification of a previous POI transaction. Present if it contains any data. */
export type MessageReference2 = {
  /**
   * Category of message. CardAcquisition, Display, Input, Loyalty, Payment, Print, CardReaderInit,
   * CardReaderPowerOff. Possible values:
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
  messageCategory?: MessageCategory2;
  /** Identification of a message pair, which processes a transaction. */
  serviceId?: string;
  /** Identification of a device message pair. */
  deviceId?: string;
  /**
   * Identification of a Sale System or a Sale Terminal for the Sale to POI protocol. default
   * MessageHeader.SaleID.
   */
  saleId?: string;
  /**
   * Identification of a POI System or a POI Terminal for the Sale to POI protocol. Default
   * `MessageHeader.POIID`.
   */
  poiid?: string;
};

export const messageReference2Schema: Schema<MessageReference2> = s.object<MessageReference2>({
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
