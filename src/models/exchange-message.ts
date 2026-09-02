import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExchangeMessage = {
  messageCode?: string;
  messageDescription?: string;
};

export const exchangeMessageSchema: Schema<ExchangeMessage> = s.object<ExchangeMessage>({
  messageCode: s.optional(s.string()),
  messageDescription: s.optional(s.string()),
});
