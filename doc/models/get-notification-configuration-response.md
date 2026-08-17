
# Get Notification Configuration Response

## Structure

`GetNotificationConfigurationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `configurationDetails` | [`NotificationConfigurationDetails2`](../../doc/models/notification-configuration-details-2.md) | Required | Details of the notification subscription configuration. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import {
  EventTypeEnum,
  FieldNameEnum,
  GetNotificationConfigurationResponse,
  IncludeModeEnum,
} from 'adyen';

const getNotificationConfigurationResponse: GetNotificationConfigurationResponse = {
  configurationDetails: {
    active: false,
    apiVersion: 106,
    description: 'description6',
    eventConfigs: [
      {
        eventType: EventTypeEnum.SCHEDULEDREFUNDS,
        includeMode: IncludeModeEnum.EXCLUDE,
      },
      {
        eventType: EventTypeEnum.SCHEDULEDREFUNDS,
        includeMode: IncludeModeEnum.EXCLUDE,
      }
    ],
    hmacSignatureKey: 'hmacSignatureKey2',
  },
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
  pspReference: 'pspReference2',
  resultCode: 'resultCode4',
};
```

