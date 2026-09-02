import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionIdType3 = {
  transactionId: string;
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
