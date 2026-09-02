import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardInfo2Schema, type CardInfo2 } from "./card-info2.js";
import { statusReason2Schema, type StatusReason2 } from "./status-reason2.js";
import { status101Schema, type Status101 } from "./status101.js";

export type PaymentInstrumentUpdateRequest = {
  balanceAccountId?: string;
  card?: CardInfo2;
  status?: Status101;
  statusComment?: string;
  statusReason?: StatusReason2;
};

export const paymentInstrumentUpdateRequestSchema: Schema<PaymentInstrumentUpdateRequest> =
  s.object<PaymentInstrumentUpdateRequest>({
    balanceAccountId: s.optional(s.string()),
    card: s.optional(s.lazy(() => cardInfo2Schema)),
    status: s.optional(s.lazy(() => status101Schema)),
    statusComment: s.optional(s.string()),
    statusReason: s.optional(s.lazy(() => statusReason2Schema)),
  });
