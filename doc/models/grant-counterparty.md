
# Grant Counterparty

Contains the details of the party that receives the grant.

## Structure

`GrantCounterparty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string \| undefined` | Optional | The identifier of the receiving account holder. |
| `balanceAccountId` | `string \| undefined` | Optional | The identifier of the balance account that belongs to the receiving account holder. |
| `transferInstrumentId` | `string \| undefined` | Optional | The identifier of the transfer instrument that belongs to the legal entity of the account holder. |

## Example

```ts
import { GrantCounterparty } from 'adyen';

const grantCounterparty: GrantCounterparty = {
  accountHolderId: 'accountHolderId2',
  balanceAccountId: 'balanceAccountId2',
  transferInstrumentId: 'transferInstrumentId6',
};
```

