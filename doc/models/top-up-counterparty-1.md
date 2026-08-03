
# Top Up Counterparty 1

The details about the counterparty that is funding the top-up.

*This model accepts additional fields of type unknown.*

## Structure

`TopUpCounterparty1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferInstrumentId` | `string` | Required | The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) that is funding the top-up. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TopUpCounterparty1 } from 'adyenlib';

const topUpCounterparty1: TopUpCounterparty1 = {
  transferInstrumentId: 'transferInstrumentId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

