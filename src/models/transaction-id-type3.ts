import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Reference to the last CardAcquisition, to use the same card. If the loyalty account ID comes from
 * a previous CardAcquisition.
 */
export type TransactionIdType3 = {
  /**
   * Unique identification of a transaction to identify the transaction on the Sale System (e.g.
   * ticket number), or the POI System.
   */
  transactionId: string;
  /**
   * Date and time of a transaction for the Sale System, the POI System or the Acquirer. Ensures the
   * uniqueness of a transaction and indicates the time when the event occurs in the
   * EventNotification message.
   */
  timeStamp: Date;
};

export const transactionIdType3Schema: Schema<TransactionIdType3> = s.object<TransactionIdType3>({
  transactionId: s.string(),
  timeStamp: s.dateTime(),
  _keysMap: {
    transactionId: "TransactionID",
    timeStamp: "TimeStamp",
  },
});
