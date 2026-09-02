import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionIdType1 = {
  transactionId: string;
  timeStamp: Date;
};

export const transactionIdType1Schema: Schema<TransactionIdType1> = s.object<TransactionIdType1>({
  transactionId: s.string(),
  timeStamp: s.dateTime(),
  _keysMap: {
    transactionId: "TransactionID",
    timeStamp: "TimeStamp",
  },
});
