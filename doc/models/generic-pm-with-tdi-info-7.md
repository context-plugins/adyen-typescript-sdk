
# Generic Pm with Tdi Info 7

Details to provide if `type` is **interac_card**.

*This model accepts additional fields of type unknown.*

## Structure

`GenericPmWithTdiInfo7`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GenericPmWithTdiInfo7, Type33 } from 'adyenlib';

const genericPmWithTdiInfo7: GenericPmWithTdiInfo7 = {
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

