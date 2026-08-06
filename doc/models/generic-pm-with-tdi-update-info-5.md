
# Generic Pm with Tdi Update Info 5

Details to provide if `type` is **eft_directdebit_CA** (EFT PAD).

*This model accepts additional fields of type unknown.*

## Structure

`GenericPmWithTdiUpdateInfo5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GenericPmWithTdiUpdateInfo5, Type33 } from 'adyen';

const genericPmWithTdiUpdateInfo5: GenericPmWithTdiUpdateInfo5 = {
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

