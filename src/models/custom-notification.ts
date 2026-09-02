import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type CustomNotification = {
  amount?: Amount;
  eventCode?: string;
  eventDate?: Date;
  merchantReference?: string;
  paymentMethod?: string;
  reason?: string;
  success?: boolean;
};

export const customNotificationSchema: Schema<CustomNotification> = s.object<CustomNotification>({
  amount: s.optional(s.lazy(() => amountSchema)),
  eventCode: s.optional(s.string()),
  eventDate: s.optional(s.dateTime()),
  merchantReference: s.optional(s.string()),
  paymentMethod: s.optional(s.string()),
  reason: s.optional(s.string()),
  success: s.optional(s.boolean()),
});
