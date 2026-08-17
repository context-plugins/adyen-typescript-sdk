
# Generic Pm with Tdi Update Info 2

Details to provide if `type` is **cup** (China Union Pay).

## Structure

`GenericPmWithTdiUpdateInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiUpdateInfo2, Type8Enum } from 'adyen';

const genericPmWithTdiUpdateInfo2: GenericPmWithTdiUpdateInfo2 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

