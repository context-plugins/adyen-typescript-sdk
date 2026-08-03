
# Account Event

*This model accepts additional fields of type unknown.*

## Structure

`AccountEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `event` | [`Event \| undefined`](../../doc/models/event.md) | Optional | - |
| `executionDate` | `string \| undefined` | Optional | The date on which the event will take place. |
| `reason` | `string \| undefined` | Optional | The reason why this event has been created. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountEvent, Event } from 'adyenlib';

const accountEvent: AccountEvent = {
  event: Event.InactivateAccount,
  executionDate: '2016-03-13T12:52:32.123Z',
  reason: 'reason0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

