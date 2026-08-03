
# Ticket Info

*This model accepts additional fields of type unknown.*

## Structure

`TicketInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestorId` | `string \| undefined` | Optional | Ticket requestorId |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TicketInfo } from 'adyenlib';

const ticketInfo: TicketInfo = {
  requestorId: 'requestorId6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

