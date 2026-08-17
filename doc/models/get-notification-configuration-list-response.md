
# Get Notification Configuration List Response

## Structure

`GetNotificationConfigurationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `configurations` | [`NotificationConfigurationDetails[] \| undefined`](../../doc/models/notification-configuration-details.md) | Optional | Details of the notification subscription configurations. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import {
  EventTypeEnum,
  FieldNameEnum,
  GetNotificationConfigurationListResponse,
  IncludeModeEnum,
} from 'adyen';

const getNotificationConfigurationListResponse: GetNotificationConfigurationListResponse = {
  configurations: [
    {
      active: false,
      apiVersion: 80,
      description: 'description0',
      eventConfigs: [
        {
          eventType: EventTypeEnum.SCHEDULEDREFUNDS,
          includeMode: IncludeModeEnum.EXCLUDE,
        }
      ],
      hmacSignatureKey: 'hmacSignatureKey6',
    },
    {
      active: false,
      apiVersion: 80,
      description: 'description0',
      eventConfigs: [
        {
          eventType: EventTypeEnum.SCHEDULEDREFUNDS,
          includeMode: IncludeModeEnum.EXCLUDE,
        }
      ],
      hmacSignatureKey: 'hmacSignatureKey6',
    },
    {
      active: false,
      apiVersion: 80,
      description: 'description0',
      eventConfigs: [
        {
          eventType: EventTypeEnum.SCHEDULEDREFUNDS,
          includeMode: IncludeModeEnum.EXCLUDE,
        }
      ],
      hmacSignatureKey: 'hmacSignatureKey6',
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
    }
  ],
  pspReference: 'pspReference8',
  resultCode: 'resultCode4',
};
```

