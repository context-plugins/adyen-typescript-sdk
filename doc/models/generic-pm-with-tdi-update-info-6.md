
# Generic Pm with Tdi Update Info 6

Details to provide if `type` is **eftpos_australia**.

## Structure

`GenericPmWithTdiUpdateInfo6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiUpdateInfo6, Type8Enum } from 'adyen';

const genericPmWithTdiUpdateInfo6: GenericPmWithTdiUpdateInfo6 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

