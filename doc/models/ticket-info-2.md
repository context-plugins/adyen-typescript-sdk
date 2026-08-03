
# Ticket Info 2

Details to provide if `type` is **ticket** (Edenred Brazil).

*This model accepts additional fields of type unknown.*

## Structure

`TicketInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestorId` | `string \| undefined` | Optional | Ticket requestorId |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TicketInfo2 } from 'adyenlib';

const ticketInfo2: TicketInfo2 = {
  requestorId: 'requestorId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

