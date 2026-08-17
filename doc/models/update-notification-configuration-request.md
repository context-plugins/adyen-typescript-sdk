
# Update Notification Configuration Request

## Structure

`UpdateNotificationConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `configurationDetails` | [`NotificationConfigurationDetails3`](../../doc/models/notification-configuration-details-3.md) | Required | Details of the notification subscription configuration to be updated. |

## Example

```ts
import {
  EventTypeEnum,
  IncludeModeEnum,
  UpdateNotificationConfigurationRequest,
} from 'adyen';

const updateNotificationConfigurationRequest: UpdateNotificationConfigurationRequest = {
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
};
```

