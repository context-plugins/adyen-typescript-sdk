import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionIdType5 = {
  transactionId: string;
  timeStamp: Date;
};

export const transactionIdType5Schema: Schema<TransactionIdType5> = s.object<TransactionIdType5>({
  transactionId: s.string(),
  timeStamp: s.dateTime(),
  _keysMap: {
    transactionId: "TransactionID",
    timeStamp: "TimeStamp",
  },
});
