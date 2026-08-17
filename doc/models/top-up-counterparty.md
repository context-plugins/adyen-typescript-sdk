
# Top Up Counterparty

## Structure

`TopUpCounterparty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferInstrumentId` | `string` | Required | The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) that is funding the top-up. |

## Example

```ts
import { TopUpCounterparty } from 'adyen';

const topUpCounterparty: TopUpCounterparty = {
  transferInstrumentId: 'transferInstrumentId2',
};
```

