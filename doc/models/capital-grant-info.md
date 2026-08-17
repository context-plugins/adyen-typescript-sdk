
# Capital Grant Info

## Structure

`CapitalGrantInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `counterparty` | [`GrantInfoCounterparty2 \| undefined`](../../doc/models/grant-info-counterparty-2.md) | Optional | An object containing the details of the receiving party of the grant. |
| `grantAccountId` | `string` | Required | The identifier of the grant account used for the grant. |
| `grantOfferId` | `string` | Required | The identifier of the grant offer that has been selected and from which the grant details will be used. |

## Example

```ts
import { CapitalGrantInfo } from 'adyen';

const capitalGrantInfo: CapitalGrantInfo = {
  grantAccountId: 'grantAccountId0',
  grantOfferId: 'grantOfferId2',
  counterparty: {
    balanceAccountId: 'balanceAccountId0',
    transferInstrumentId: 'transferInstrumentId4',
  },
};
```

