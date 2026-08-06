
# Counterparty 10

*This model accepts additional fields of type unknown.*

## Structure

`Counterparty10`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string \| undefined` | Optional | The unique identifier of the account holder that receives the grant. |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the balance account where the funds are disbursed. The balance account must belong to the specified account holder. |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the transfer instrument where the funds are disbursed. The transfer instrument must belong to the legal entity of the specified account holder. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Counterparty10 } from 'adyen';

const counterparty10: Counterparty10 = {
  accountHolderId: 'accountHolderId6',
  balanceAccountId: 'balanceAccountId6',
  transferInstrumentId: 'transferInstrumentId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

