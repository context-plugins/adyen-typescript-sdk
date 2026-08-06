
# Generic Pm with Tdi Update Info 9

Details to provide if `type` is **interac_card**.

*This model accepts additional fields of type unknown.*

## Structure

`GenericPmWithTdiUpdateInfo9`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GenericPmWithTdiUpdateInfo9, Type33 } from 'adyen';

const genericPmWithTdiUpdateInfo9: GenericPmWithTdiUpdateInfo9 = {
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

