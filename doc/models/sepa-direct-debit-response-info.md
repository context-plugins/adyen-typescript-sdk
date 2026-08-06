
# Sepa Direct Debit Response Info

*This model accepts additional fields of type unknown.*

## Structure

`SepaDirectDebitResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditorId` | `string \| undefined` | Optional | Creditor id |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SepaDirectDebitResponseInfo, Type33 } from 'adyen';

const sepaDirectDebitResponseInfo: SepaDirectDebitResponseInfo = {
  creditorId: 'creditorId2',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type33.Fixed,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

