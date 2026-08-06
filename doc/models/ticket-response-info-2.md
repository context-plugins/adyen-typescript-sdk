
# Ticket Response Info 2

**ticket** (Edenred Brazil) details

*This model accepts additional fields of type unknown.*

## Structure

`TicketResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestorId` | `string \| undefined` | Optional | Ticket requestorId |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TicketResponseInfo2 } from 'adyen';

const ticketResponseInfo2: TicketResponseInfo2 = {
  requestorId: 'requestorId0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

