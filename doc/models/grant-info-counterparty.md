
# Grant Info Counterparty

Contains the details of the party that receives the grant.

## Structure

`GrantInfoCounterparty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The identifier of the balance account that belongs to the receiving account holder. |
| `transferInstrumentId` | `string \| undefined` | Optional | The identifier of the transfer instrument that belongs to the legal entity of the account holder. |

## Example

```ts
import { GrantInfoCounterparty } from 'adyen';

const grantInfoCounterparty: GrantInfoCounterparty = {
  balanceAccountId: 'balanceAccountId8',
  transferInstrumentId: 'transferInstrumentId4',
};
```

