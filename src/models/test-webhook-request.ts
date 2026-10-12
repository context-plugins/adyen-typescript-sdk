import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customNotification1Schema, type CustomNotification1 } from "./custom-notification1.js";

export type TestWebhookRequest = {
  /**
   * Custom test notification object. Required when the
   * [`types`](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/webhooks/{webhookId}/test__reqParam_types)
   * list contains **CUSTOM**.
   */
  notification?: CustomNotification1;
  /**
   * List of event codes for which to send test notifications. Only the webhook types below are
   * supported.
   *
   * Possible values if webhook `type`: **standard**:
   *
   * * **AUTHORISATION**
   * * **CHARGEBACK_REVERSED**
   * * **ORDER_CLOSED**
   * * **ORDER_OPENED**
   * * **PAIDOUT_REVERSED**
   * * **PAYOUT_THIRDPARTY**
   * * **REFUNDED_REVERSED**
   * * **REFUND_WITH_DATA**
   * * **REPORT_AVAILABLE**
   * * **CUSTOM** - set your custom notification fields in the
   *   [`notification`](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/webhooks/{webhookId}/test__reqParam_notification)
   *   object.
   *
   * Possible values if webhook `type`: **banktransfer-notification**:
   *
   * * **PENDING**
   *
   * Possible values if webhook `type`: **report-notification**:
   *
   * * **REPORT_AVAILABLE**
   *
   * Possible values if webhook `type`: **ideal-notification**:
   *
   * * **AUTHORISATION**
   *
   * Possible values if webhook `type`: **pending-notification**:
   *
   * * **PENDING**
   */
  types?: string[];
};

export const testWebhookRequestSchema: Schema<TestWebhookRequest> = s.object<TestWebhookRequest>({
  notification: s.optional(s.lazy(() => customNotification1Schema)),
  types: s.optional(s.array(s.string())),
});
