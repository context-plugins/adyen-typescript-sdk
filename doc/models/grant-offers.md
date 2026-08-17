
# Grant Offers

## Structure

`GrantOffers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantOffers` | [`GrantOffer[]`](../../doc/models/grant-offer.md) | Required | A list of available grant offers. |

## Example

```ts
import { ContractTypeEnum, GrantOffers } from 'adyen';

const grantOffers: GrantOffers = {
  grantOffers: [
    {
      accountHolderId: 'accountHolderId0',
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      contractType: ContractTypeEnum.CashAdvance,
      expiresAt: '2016-03-13T12:52:32.123Z',
      fee: {
        amount: {
          currency: 'currency2',
          value: BigInt(110),
        },
      },
      id: 'id8',
    }
  ],
};
```

