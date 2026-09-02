import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionIdType2 = {
  transactionId: string;
  timeStamp: Date;
};

export const transactionIdType2Schema: Schema<TransactionIdType2> = s.object<TransactionIdType2>({
  transactionId: s.string(),
  timeStamp: s.dateTime(),
  _keysMap: {
    transactionId: "TransactionID",
    timeStamp: "TimeStamp",
  },
});
