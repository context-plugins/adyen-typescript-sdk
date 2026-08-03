
# Delete Notification Configuration Request

*This model accepts additional fields of type unknown.*

## Structure

`DeleteNotificationConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `notificationIds` | `bigint[]` | Required | A list of IDs of the notification subscription configurations to be deleted. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeleteNotificationConfigurationRequest } from 'adyenlib';

const deleteNotificationConfigurationRequest: DeleteNotificationConfigurationRequest = {
  notificationIds: [
    BigInt(76),
    BigInt(77)
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

