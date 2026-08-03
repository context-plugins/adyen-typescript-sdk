
# Grant Counterparty 2

Contains the details of the party that receives the grant.

*This model accepts additional fields of type unknown.*

## Structure

`GrantCounterparty2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string \| undefined` | Optional | The unique identifier of the account holder that receives the grant. |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the balance account where the funds are disbursed. The balance account must belong to the specified account holder. |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the transfer instrument where the funds are disbursed. The transfer instrument must belong to the legal entity of the specified account holder. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GrantCounterparty2 } from 'adyenlib';

const grantCounterparty2: GrantCounterparty2 = {
  accountHolderId: 'accountHolderId8',
  balanceAccountId: 'balanceAccountId8',
  transferInstrumentId: 'transferInstrumentId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

