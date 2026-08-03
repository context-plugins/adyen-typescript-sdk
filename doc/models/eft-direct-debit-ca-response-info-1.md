
# Eft Direct Debit Ca Response Info 1

**eft_directdebit_CA** (EFT PAD) details

*This model accepts additional fields of type unknown.*

## Structure

`EftDirectDebitCaResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EftDirectDebitCaResponseInfo1, Type33 } from 'adyenlib';

const eftDirectDebitCaResponseInfo1: EftDirectDebitCaResponseInfo1 = {
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

