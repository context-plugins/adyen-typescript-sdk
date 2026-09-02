import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionIdType4 = {
  transactionId: string;
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
