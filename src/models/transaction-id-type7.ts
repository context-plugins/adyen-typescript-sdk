import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionIdType7 = {
  transactionId: string;
  timeStamp: Date;
};

export const transactionIdType7Schema: Schema<TransactionIdType7> = s.object<TransactionIdType7>({
  transactionId: s.string(),
  timeStamp: s.dateTime(),
  _keysMap: {
    transactionId: "TransactionID",
    timeStamp: "TimeStamp",
  },
});
