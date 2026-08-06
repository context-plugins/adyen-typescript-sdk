
# Ticket Response Info

*This model accepts additional fields of type unknown.*

## Structure

`TicketResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestorId` | `string \| undefined` | Optional | Ticket requestorId |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TicketResponseInfo } from 'adyen';

const ticketResponseInfo: TicketResponseInfo = {
  requestorId: 'requestorId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

