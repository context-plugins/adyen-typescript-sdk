
# Star Info

## Structure

`StarInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `processingType` | [`ProcessingTypeEnum`](../../doc/models/processing-type-enum.md) | Required | The type of transactions processed over this payment method.<br>Allowed values:<br><br>- **pos** for in-person payments.<br>- **billpay** for subscription payments, both the initial payment and the later recurring payments. These transactions have `recurringProcessingModel` **Subscription**.<br>- **ecom** for all other card not present transactions. This includes non-recurring transactions and transactions with `recurringProcessingModel` **CardOnFile** or **UnscheduledCardOnFile**. |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { ProcessingTypeEnum, StarInfo, Type8Enum } from 'adyen';

const starInfo: StarInfo = {
  processingType: ProcessingTypeEnum.Ecom,
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

