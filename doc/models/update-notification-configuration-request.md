
# Update Notification Configuration Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdateNotificationConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `configurationDetails` | [`NotificationConfigurationDetails`](../../doc/models/notification-configuration-details.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EventType,
  IncludeMode,
  UpdateNotificationConfigurationRequest,
} from 'adyenlib';

const updateNotificationConfigurationRequest: UpdateNotificationConfigurationRequest = {
  configurationDetails: {
    active: false,
    apiVersion: 106,
    description: 'description6',
    eventConfigs: [
      {
        eventType: EventType.ScheduledRefunds,
        includeMode: IncludeMode.Exclude,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        eventType: EventType.ScheduledRefunds,
        includeMode: IncludeMode.Exclude,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    hmacSignatureKey: 'hmacSignatureKey2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

