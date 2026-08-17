
# Generic Pm with Tdi Info 1

Details to provide if `type` is **cup** (China Union Pay).

## Structure

`GenericPmWithTdiInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiInfo1, Type8Enum } from 'adyen';

const genericPmWithTdiInfo1: GenericPmWithTdiInfo1 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

