
# EFT Direct Debit CA Response Info 1

**eft_directdebit_CA** (EFT PAD) details

## Structure

`EFTDirectDebitCAResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { EFTDirectDebitCAResponseInfo1, Type8Enum } from 'adyen';

const eFTDirectDebitCAResponseInfo1: EFTDirectDebitCAResponseInfo1 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

