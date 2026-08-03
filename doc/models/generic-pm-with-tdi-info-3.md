
# Generic Pm with Tdi Info 3

Details to provide if `type` is **eft_directdebit_CA** (EFT PAD).

*This model accepts additional fields of type unknown.*

## Structure

`GenericPmWithTdiInfo3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GenericPmWithTdiInfo3, Type33 } from 'adyenlib';

const genericPmWithTdiInfo3: GenericPmWithTdiInfo3 = {
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

