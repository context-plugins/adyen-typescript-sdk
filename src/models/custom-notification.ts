import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type CustomNotification = {
  /**
   * The amount of the payment that the notification is about. Set the value in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  amount?: Amount;
  /**
   * The event that caused the notification to be sent.Currently supported values:
   * * **AUTHORISATION**
   * * **CANCELLATION**
   * * **REFUND**
   * * **CAPTURE**
   * * **REPORT_AVAILABLE**
   * * **CHARGEBACK**
   * * **REQUEST_FOR_INFORMATION**
   * * **NOTIFICATION_OF_CHARGEBACK**
   * * **NOTIFICATIONTEST**
   * * **ORDER_OPENED**
   * * **ORDER_CLOSED**
   * * **CHARGEBACK_REVERSED**
   * * **REFUNDED_REVERSED**
   * * **REFUND_WITH_DATA**
   */
  eventCode?: string;
  /**
   * The time of the event. Format: [ISO 8601](http://www.w3.org/TR/NOTE-datetime),
   * YYYY-MM-DDThh:mm:ssTZD.
   */
  eventDate?: Date;
  /** Your reference for the custom test notification. */
  merchantReference?: string;
  /**
   * The payment method for the payment that the notification is about. Possible values:
   * * **amex**
   * * **visa**
   * * **mc**
   * * **maestro**
   * * **bcmc**
   * * **paypal**
   *  * **sms**
   *  * **bankTransfer_NL**
   * * **bankTransfer_DE**
   * * **bankTransfer_BE**
   * * **ideal**
   * * **elv**
   * * **sepadirectdebit**
   */
  paymentMethod?: string;
  /** A description of what caused the notification. */
  reason?: string;
  /**
   * The outcome of the event which the notification is about. Set to either **true** or **false**.
   */
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
