
# Generic Pm with Tdi Update Info 12

Details to provide if `type` is **maestro_usa**.
Only for Maestro USA, otherwise use `maestro`.

*This model accepts additional fields of type unknown.*

## Structure

`GenericPmWithTdiUpdateInfo12`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GenericPmWithTdiUpdateInfo12, Type33 } from 'adyenlib';

const genericPmWithTdiUpdateInfo12: GenericPmWithTdiUpdateInfo12 = {
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

