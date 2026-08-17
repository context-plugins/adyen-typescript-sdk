
# Grant Offer 1

## Structure

`GrantOffer1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the account holder to which the grant is offered. |
| `amount` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The amount that would be paid out to the user for business financing. |
| `contractType` | [`ContractTypeEnum \| undefined`](../../doc/models/contract-type-enum.md) | Optional | The contract type of the offer.<br><br>Possible values:<br><br>* **loan**<br>* **cashAdvance** |
| `expiresAt` | `string \| undefined` | Optional | The expiration date and time of the offer validity period. |
| `fee` | [`GrantOfferFee1 \| undefined`](../../doc/models/grant-offer-fee-1.md) | Optional | Contains information about the fee that your user would pay for the grant. |
| `id` | `string \| undefined` | Optional | The unique identifier of the offer. |
| `repayment` | [`Repayment11 \| undefined`](../../doc/models/repayment-11.md) | Optional | Contains information about the repayment configuration of the grant. |
| `startsAt` | `string \| undefined` | Optional | The starting date and time of the offer validity period. |

## Example

```ts
import { ContractTypeEnum, GrantOffer1 } from 'adyen';

const grantOffer1: GrantOffer1 = {
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
    aprBasisPoints: 142,
  },
  id: 'id8',
};
```

