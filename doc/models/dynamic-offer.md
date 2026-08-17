
# Dynamic Offer

## Structure

`DynamicOffer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the account holder that the dynamic offer is for. |
| `contractType` | [`ContractTypeEnum`](../../doc/models/contract-type-enum.md) | Required | The contract type of the offer.<br><br>Possible values:<br><br>* **loan**<br>* **cashAdvance** |
| `expiresAt` | `string` | Required | The expiration date and time of the offer validity period. |
| `financingType` | [`FinancingType2Enum`](../../doc/models/financing-type-2-enum.md) | Required | The type of financing that the offer is for.<br><br>Possible values: **businessFinancing**. |
| `id` | `string` | Required | The unique identifier of the dynamic offer. |
| `maximumAmount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The maximum financing amount available to the account holder under this offer. |
| `minimumAmount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The minimum financing amount available to the account holder under this offer. |
| `repayment` | [`DynamicOfferRepayment2`](../../doc/models/dynamic-offer-repayment-2.md) | Required | Contains information about the repayment configuration of the grant. |
| `startsAt` | `string` | Required | The starting date and time of the offer validity period. |

## Example

```ts
import { ContractTypeEnum, DynamicOffer, FinancingType2Enum } from 'adyen';

const dynamicOffer: DynamicOffer = {
  accountHolderId: 'accountHolderId6',
  contractType: ContractTypeEnum.CashAdvance,
  expiresAt: '2016-03-13T12:52:32.123Z',
  financingType: FinancingType2Enum.HardwareFinancing,
  id: 'id2',
  maximumAmount: {
    currency: 'currency0',
    value: BigInt(190),
  },
  minimumAmount: {
    currency: 'currency2',
    value: BigInt(96),
  },
  repayment: {
    term: {
      estimatedDays: 248,
      maximumDays: 24,
    },
  },
  startsAt: '2016-03-13T12:52:32.123Z',
};
```

