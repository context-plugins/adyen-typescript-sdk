
# Grant Counterparty 2

An object containing the details of the receiving party of the grant.

## Structure

`GrantCounterparty2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string \| undefined` | Optional | The identifier of the receiving account holder. |
| `balanceAccountId` | `string \| undefined` | Optional | The identifier of the balance account that belongs to the receiving account holder. |
| `transferInstrumentId` | `string \| undefined` | Optional | The identifier of the transfer instrument that belongs to the legal entity of the account holder. |

## Example

```ts
import { GrantCounterparty2 } from 'adyen';

const grantCounterparty2: GrantCounterparty2 = {
  accountHolderId: 'accountHolderId8',
  balanceAccountId: 'balanceAccountId8',
  transferInstrumentId: 'transferInstrumentId4',
};
```

