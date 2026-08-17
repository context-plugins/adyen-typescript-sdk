
# Calculated Grant Offer

## Structure

`CalculatedGrantOffer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the account holder that the dynamic offer is for. |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The financing amount that would be paid out to your user. |
| `contractType` | [`ContractTypeEnum`](../../doc/models/contract-type-enum.md) | Required | The contract type of the offer.<br><br>Possible values:<br><br>* **loan**<br>* **cashAdvance** |
| `expiresAt` | `string` | Required | The expiration date and time of the offer validity period. |
| `fee` | [`GrantOfferFee1`](../../doc/models/grant-offer-fee-1.md) | Required | Contains information about the fee that your user would pay for the grant. |
| `repayment` | [`Repayment11`](../../doc/models/repayment-11.md) | Required | Contains information about the repayment configuration of the grant. |
| `startsAt` | `string` | Required | The starting date and time of the offer validity period. |

## Example

```ts
import { CalculatedGrantOffer, ContractTypeEnum } from 'adyen';

const calculatedGrantOffer: CalculatedGrantOffer = {
  accountHolderId: 'accountHolderId2',
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
  repayment: {
    basisPoints: 18,
    term: {
      estimatedDays: 248,
      maximumDays: 24,
    },
    threshold: {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
    },
  },
  startsAt: '2016-03-13T12:52:32.123Z',
};
```

