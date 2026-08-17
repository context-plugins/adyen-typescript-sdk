
# Get Dynamic Offers Response

## Structure

`GetDynamicOffersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dynamicOffers` | [`DynamicOffer[]`](../../doc/models/dynamic-offer.md) | Required | Contains a list of available dynamic offers for the specified account holder. |

## Example

```ts
import {
  ContractTypeEnum,
  FinancingType2Enum,
  GetDynamicOffersResponse,
} from 'adyen';

const getDynamicOffersResponse: GetDynamicOffersResponse = {
  dynamicOffers: [
    {
      accountHolderId: 'accountHolderId4',
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
    }
  ],
};
```

