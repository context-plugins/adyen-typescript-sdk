
# Counterparty 12

*This model accepts additional fields of type unknown.*

## Structure

`Counterparty12`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the balance account where the funds are disbursed. The balance account must belong to the specified account holder. |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the transfer instrument where the funds are disbursed. The transfer instrument must belong to the legal entity of the specified account holder. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Counterparty12 } from 'adyenlib';

const counterparty12: Counterparty12 = {
  balanceAccountId: 'balanceAccountId4',
  transferInstrumentId: 'transferInstrumentId0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

