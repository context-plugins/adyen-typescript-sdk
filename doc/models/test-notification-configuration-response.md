
# Test Notification Configuration Response

## Structure

`TestNotificationConfigurationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessages` | `string[] \| undefined` | Optional | Any error messages encountered. |
| `eventTypes` | [`EventType1Enum[] \| undefined`](../../doc/models/event-type-1-enum.md) | Optional | The event types that were tested.<br><br>> Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`. |
| `exchangeMessages` | [`ExchangeMessage[] \| undefined`](../../doc/models/exchange-message.md) | Optional | The notification message and related response messages. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `notificationId` | `bigint` | Required | The ID of the notification subscription configuration. |
| `okMessages` | `string[] \| undefined` | Optional | A list of messages describing the testing steps. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import {
  EventType1Enum,
  FieldNameEnum,
  TestNotificationConfigurationResponse,
} from 'adyen';

const testNotificationConfigurationResponse: TestNotificationConfigurationResponse = {
  notificationId: BigInt(76),
  errorMessages: [
    'errorMessages1'
  ],
  eventTypes: [
    EventType1Enum.FUNDSMIGRATED,
    EventType1Enum.PAYMENTFAILURE
  ],
  exchangeMessages: [
    {
      messageCode: 'messageCode8',
      messageDescription: 'messageDescription8',
    }
  ],
  invalidFields: [
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldNameEnum.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
      },
    },
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldNameEnum.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
      },
    }
  ],
  okMessages: [
    'okMessages0',
    'okMessages1'
  ],
};
```

