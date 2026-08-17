
# Notification Event Configuration

## Structure

`NotificationEventConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventType` | [`EventTypeEnum`](../../doc/models/event-type-enum.md) | Required | The type of event.<br><br>Possible values: **ACCOUNT_CLOSED**, **ACCOUNT_CREATED**, **ACCOUNT_FUNDS_BELOW_THRESHOLD**, **ACCOUNT_HOLDER_CREATED**, **ACCOUNT_HOLDER_LIMIT_REACHED**, **ACCOUNT_HOLDER_PAYOUT**, **ACCOUNT_HOLDER_STATUS_CHANGE**, **ACCOUNT_HOLDER_STORE_STATUS_CHANGE**, **ACCOUNT_HOLDER_UPCOMING_DEADLINE**, **ACCOUNT_HOLDER_UPDATED**, **ACCOUNT_HOLDER_VERIFICATION**, **ACCOUNT_UPDATED**, **BENEFICIARY_SETUP**, **COMPENSATE_NEGATIVE_BALANCE**, **DIRECT_DEBIT_INITIATED**, **PAYMENT_FAILURE**, **REFUND_FUNDS_TRANSFER**, **REPORT_AVAILABLE**, **SCHEDULED_REFUNDS**, **TRANSFER_FUNDS**. |
| `includeMode` | [`IncludeModeEnum`](../../doc/models/include-mode-enum.md) | Required | Indicates whether the specified `eventType` is sent to your webhook endpoint.<br>Possible values:<br><br>* **INCLUDE**: Send the specified `eventType`.<br>* **EXCLUDE**: Send all event types except the specified `eventType` and other event types with the `includeMode` set to **EXCLUDE**. |

## Example

```ts
import {
  EventTypeEnum,
  IncludeModeEnum,
  NotificationEventConfiguration,
} from 'adyen';

const notificationEventConfiguration: NotificationEventConfiguration = {
  eventType: EventTypeEnum.SCHEDULEDREFUNDS,
  includeMode: IncludeModeEnum.EXCLUDE,
};
```

