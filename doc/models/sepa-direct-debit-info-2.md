
# Sepa Direct Debit Info 2

Details to provide if `type` is **sepadirectdebit**.

## Structure

`SepaDirectDebitInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditorId` | `string \| undefined` | Optional | Creditor id |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { SepaDirectDebitInfo2, Type8Enum } from 'adyen';

const sepaDirectDebitInfo2: SepaDirectDebitInfo2 = {
  creditorId: 'creditorId2',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

