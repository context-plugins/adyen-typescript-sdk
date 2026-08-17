
# Grant Offer

## Structure

`GrantOffer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The identifier of the account holder to which the grant is offered. |
| `amount` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The principal amount of the grant. |
| `contractType` | [`ContractTypeEnum \| undefined`](../../doc/models/contract-type-enum.md) | Optional | The contract type of the grant offer. Possible value: **cashAdvance**, **loan**. |
| `expiresAt` | `string \| undefined` | Optional | The end date of the grant offer validity period. |
| `fee` | [`Fee1 \| undefined`](../../doc/models/fee-1.md) | Optional | Details of the fee configuration. |
| `id` | `string \| undefined` | Optional | The unique identifier of the grant offer. |
| `repayment` | [`Repayment2 \| undefined`](../../doc/models/repayment-2.md) | Optional | Details of the repayment configuration. |
| `startsAt` | `string \| undefined` | Optional | The starting date of the grant offer validity period. |

## Example

```ts
import { ContractTypeEnum, GrantOffer } from 'adyen';

const grantOffer: GrantOffer = {
  accountHolderId: 'accountHolderId4',
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
  id: 'id2',
};
```

