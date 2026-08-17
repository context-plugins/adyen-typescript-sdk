
# Generic Pm with Tdi Update Info 12

Details to provide if `type` is **maestro_usa**.
Only for Maestro USA, otherwise use `maestro`.

## Structure

`GenericPmWithTdiUpdateInfo12`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiUpdateInfo12, Type8Enum } from 'adyen';

const genericPmWithTdiUpdateInfo12: GenericPmWithTdiUpdateInfo12 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

