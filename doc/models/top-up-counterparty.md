
# Top Up Counterparty

*This model accepts additional fields of type unknown.*

## Structure

`TopUpCounterparty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferInstrumentId` | `string` | Required | The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) that is funding the top-up. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TopUpCounterparty } from 'adyenlib';

const topUpCounterparty: TopUpCounterparty = {
  transferInstrumentId: 'transferInstrumentId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

