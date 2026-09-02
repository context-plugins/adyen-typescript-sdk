import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionIdType = {
  transactionId: string;
  timeStamp: Date;
};

export const transactionIdTypeSchema: Schema<TransactionIdType> = s.object<TransactionIdType>({
  transactionId: s.string(),
  timeStamp: s.dateTime(),
  _keysMap: {
    transactionId: "TransactionID",
    timeStamp: "TimeStamp",
  },
});
