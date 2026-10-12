import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Unique identification of a POI transaction for a POI. Absent if SaleReferenceID is sufficient to
 * identify the transaction.
 */
export type TransactionIdType4 = {
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

export const transactionIdType4Schema: Schema<TransactionIdType4> = s.object<TransactionIdType4>({
  transactionId: s.string(),
  timeStamp: s.dateTime(),
  _keysMap: {
    transactionId: "TransactionID",
    timeStamp: "TimeStamp",
  },
});
