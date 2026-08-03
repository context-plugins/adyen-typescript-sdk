
# Funds Collection

*This model accepts additional fields of type unknown.*

## Structure

`FundsCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIdentification` | [`BankAccountIdentification1 \| undefined`](../../doc/models/bank-account-identification-1.md) | Optional | - |
| `fundsCollectionType` | [`FundsCollectionType2 \| undefined`](../../doc/models/funds-collection-type-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FundsCollection, FundsCollectionType2 } from 'adyenlib';

const fundsCollection: FundsCollection = {
  accountIdentification: {
    type: 'BankAccountIdentification1',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  fundsCollectionType: FundsCollectionType2.UnscheduledRepayment,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

