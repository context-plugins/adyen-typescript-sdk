
# Create Notification Configuration Request

## Structure

`CreateNotificationConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `configurationDetails` | [`NotificationConfigurationDetails4`](../../doc/models/notification-configuration-details-4.md) | Required | Details of the prospective notification subscription configuration. |

## Example

```ts
import {
  CreateNotificationConfigurationRequest,
  EventTypeEnum,
  IncludeModeEnum,
} from 'adyen';

const createNotificationConfigurationRequest: CreateNotificationConfigurationRequest = {
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

