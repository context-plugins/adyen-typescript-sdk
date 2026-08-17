
# Get Notification Configuration Request

## Structure

`GetNotificationConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `notificationId` | `bigint` | Required | The ID of the notification subscription configuration whose details are to be retrieved. |

## Example

```ts
import { GetNotificationConfigurationRequest } from 'adyen';

const getNotificationConfigurationRequest: GetNotificationConfigurationRequest = {
  notificationId: BigInt(0),
};
```

