import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount110Schema, type Amount110 } from "./amount110.js";
import { counterparty11Schema, type Counterparty11 } from "./counterparty11.js";

export type PaymentDetails1 = {
  amount: Amount110;
  counterparty: Counterparty11;
  description: string;
  expiresAt: Date;
};

export const paymentDetails1Schema: Schema<PaymentDetails1> = s.object<PaymentDetails1>({
  amount: amount110Schema,
  counterparty: counterparty11Schema,
  description: s.string(),
  expiresAt: s.dateTime(),
});
