
# EFT Direct Debit CA Response Info

## Structure

`EFTDirectDebitCAResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { EFTDirectDebitCAResponseInfo, Type8Enum } from 'adyen';

const eFTDirectDebitCAResponseInfo: EFTDirectDebitCAResponseInfo = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

