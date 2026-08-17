
# Nyce Response Info 1

**nyce** details

## Structure

`NyceResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `processingType` | [`ProcessingTypeEnum \| undefined`](../../doc/models/processing-type-enum.md) | Optional | The type of transactions processed over this payment method.<br>Allowed values:<br><br>- **pos** for in-person payments.<br>- **billpay** for subscription payments, both the initial payment and the later recurring payments. These transactions have `recurringProcessingModel` **Subscription**.<br>- **ecom** for all other card not present transactions. This includes non-recurring transactions and transactions with `recurringProcessingModel` **CardOnFile** or **UnscheduledCardOnFile**. |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { NyceResponseInfo1, ProcessingTypeEnum, Type8Enum } from 'adyen';

const nyceResponseInfo1: NyceResponseInfo1 = {
  processingType: ProcessingTypeEnum.Ecom,
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

