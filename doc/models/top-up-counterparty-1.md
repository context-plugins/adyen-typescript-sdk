
# Top Up Counterparty 1

The details about the counterparty that is funding the top-up.

## Structure

`TopUpCounterparty1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferInstrumentId` | `string` | Required | The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) that is funding the top-up. |

## Example

```ts
import { TopUpCounterparty1 } from 'adyen';

const topUpCounterparty1: TopUpCounterparty1 = {
  transferInstrumentId: 'transferInstrumentId4',
};
```

