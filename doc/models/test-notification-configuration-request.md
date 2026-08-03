
# Test Notification Configuration Request

*This model accepts additional fields of type unknown.*

## Structure

`TestNotificationConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventTypes` | [`EventType1[] \| undefined`](../../doc/models/event-type-1.md) | Optional | The event types to test.  If left blank, then all of the configured event types will be tested.<br><br>> Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`. |
| `notificationId` | `bigint` | Required | The ID of the notification subscription configuration to be tested. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EventType1, TestNotificationConfigurationRequest } from 'adyenlib';

const testNotificationConfigurationRequest: TestNotificationConfigurationRequest = {
  notificationId: BigInt(134),
  eventTypes: [
    EventType1.AccountHolderUpcomingDeadline,
    EventType1.AccountHolderUpdated,
    EventType1.AccountHolderVerification
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

