
# Get Notification Configuration Request

*This model accepts additional fields of type unknown.*

## Structure

`GetNotificationConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `notificationId` | `bigint` | Required | The ID of the notification subscription configuration whose details are to be retrieved. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetNotificationConfigurationRequest } from 'adyen';

const getNotificationConfigurationRequest: GetNotificationConfigurationRequest = {
  notificationId: BigInt(0),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

