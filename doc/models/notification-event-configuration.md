
# Notification Event Configuration

*This model accepts additional fields of type unknown.*

## Structure

`NotificationEventConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventType` | [`EventType`](../../doc/models/event-type.md) | Required | - |
| `includeMode` | [`IncludeMode`](../../doc/models/include-mode.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EventType,
  IncludeMode,
  NotificationEventConfiguration,
} from 'adyen';

const notificationEventConfiguration: NotificationEventConfiguration = {
  eventType: EventType.ScheduledRefunds,
  includeMode: IncludeMode.Exclude,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

