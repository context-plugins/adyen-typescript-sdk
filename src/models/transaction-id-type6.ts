import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionIdType6 = {
  transactionId: string;
  timeStamp: Date;
};

export const transactionIdType6Schema: Schema<TransactionIdType6> = s.object<TransactionIdType6>({
  transactionId: s.string(),
  timeStamp: s.dateTime(),
  _keysMap: {
    transactionId: "TransactionID",
    timeStamp: "TimeStamp",
  },
});
