
# Get Notification Configuration List Response

*This model accepts additional fields of type unknown.*

## Structure

`GetNotificationConfigurationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `configurations` | [`NotificationConfigurationDetails[] \| undefined`](../../doc/models/notification-configuration-details.md) | Optional | Details of the notification subscription configurations. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EventType,
  FieldName,
  GetNotificationConfigurationListResponse,
  IncludeMode,
} from 'adyenlib';

const getNotificationConfigurationListResponse: GetNotificationConfigurationListResponse = {
  configurations: [
    {
      active: false,
      apiVersion: 80,
      description: 'description0',
      eventConfigs: [
        {
          eventType: EventType.ScheduledRefunds,
          includeMode: IncludeMode.Exclude,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      hmacSignatureKey: 'hmacSignatureKey6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      active: false,
      apiVersion: 80,
      description: 'description0',
      eventConfigs: [
        {
          eventType: EventType.ScheduledRefunds,
          includeMode: IncludeMode.Exclude,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      hmacSignatureKey: 'hmacSignatureKey6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      active: false,
      apiVersion: 80,
      description: 'description0',
      eventConfigs: [
        {
          eventType: EventType.ScheduledRefunds,
          includeMode: IncludeMode.Exclude,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      hmacSignatureKey: 'hmacSignatureKey6',
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
    }
  ],
  pspReference: 'pspReference8',
  resultCode: 'resultCode4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

