
# Sepa Direct Debit Response Info 2

**sepadirectdebit** details

## Structure

`SepaDirectDebitResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditorId` | `string \| undefined` | Optional | Creditor id |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { SepaDirectDebitResponseInfo2, Type8Enum } from 'adyen';

const sepaDirectDebitResponseInfo2: SepaDirectDebitResponseInfo2 = {
  creditorId: 'creditorId0',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

