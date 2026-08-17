
# Delete Notification Configuration Request

## Structure

`DeleteNotificationConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `notificationIds` | `bigint[]` | Required | A list of IDs of the notification subscription configurations to be deleted. |

## Example

```ts
import { DeleteNotificationConfigurationRequest } from 'adyen';

const deleteNotificationConfigurationRequest: DeleteNotificationConfigurationRequest = {
  notificationIds: [
    BigInt(76),
    BigInt(77)
  ],
};
```

