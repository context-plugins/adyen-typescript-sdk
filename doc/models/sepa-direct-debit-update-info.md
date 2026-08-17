
# Sepa Direct Debit Update Info

## Structure

`SepaDirectDebitUpdateInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { SepaDirectDebitUpdateInfo, Type8Enum } from 'adyen';

const sepaDirectDebitUpdateInfo: SepaDirectDebitUpdateInfo = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

