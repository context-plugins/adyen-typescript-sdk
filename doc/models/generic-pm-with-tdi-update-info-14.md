
# Generic Pm with Tdi Update Info 14

Details to provide if `type` is **visa**.

## Structure

`GenericPmWithTdiUpdateInfo14`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiUpdateInfo14, Type8Enum } from 'adyen';

const genericPmWithTdiUpdateInfo14: GenericPmWithTdiUpdateInfo14 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

