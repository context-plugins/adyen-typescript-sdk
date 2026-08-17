
# Sepa Direct Debit Response Info

## Structure

`SepaDirectDebitResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditorId` | `string \| undefined` | Optional | Creditor id |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { SepaDirectDebitResponseInfo, Type8Enum } from 'adyen';

const sepaDirectDebitResponseInfo: SepaDirectDebitResponseInfo = {
  creditorId: 'creditorId2',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

