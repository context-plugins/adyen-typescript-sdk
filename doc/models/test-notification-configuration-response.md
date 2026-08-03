
# Test Notification Configuration Response

*This model accepts additional fields of type unknown.*

## Structure

`TestNotificationConfigurationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessages` | `string[] \| undefined` | Optional | Any error messages encountered. |
| `eventTypes` | [`EventType1[] \| undefined`](../../doc/models/event-type-1.md) | Optional | The event types that were tested.<br><br>> Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`. |
| `exchangeMessages` | [`ExchangeMessage[] \| undefined`](../../doc/models/exchange-message.md) | Optional | The notification message and related response messages. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `notificationId` | `bigint` | Required | The ID of the notification subscription configuration. |
| `okMessages` | `string[] \| undefined` | Optional | A list of messages describing the testing steps. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EventType1,
  FieldName,
  TestNotificationConfigurationResponse,
} from 'adyenlib';

const testNotificationConfigurationResponse: TestNotificationConfigurationResponse = {
  notificationId: BigInt(76),
  errorMessages: [
    'errorMessages1'
  ],
  eventTypes: [
    EventType1.FundsMigrated,
    EventType1.PaymentFailure
  ],
  exchangeMessages: [
    {
      messageCode: 'messageCode8',
      messageDescription: 'messageDescription8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  invalidFields: [
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldName.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldName.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  okMessages: [
    'okMessages0',
    'okMessages1'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

