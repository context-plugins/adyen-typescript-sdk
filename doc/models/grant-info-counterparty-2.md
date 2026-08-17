
# Grant Info Counterparty 2

An object containing the details of the receiving party of the grant.

## Structure

`GrantInfoCounterparty2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The identifier of the balance account that belongs to the receiving account holder. |
| `transferInstrumentId` | `string \| undefined` | Optional | The identifier of the transfer instrument that belongs to the legal entity of the account holder. |

## Example

```ts
import { GrantInfoCounterparty2 } from 'adyen';

const grantInfoCounterparty2: GrantInfoCounterparty2 = {
  balanceAccountId: 'balanceAccountId8',
  transferInstrumentId: 'transferInstrumentId2',
};
```

