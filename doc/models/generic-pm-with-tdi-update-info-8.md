
# Generic Pm with Tdi Update Info 8

Details to provide if `type` is **ideal**.

## Structure

`GenericPmWithTdiUpdateInfo8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiUpdateInfo8, Type8Enum } from 'adyen';

const genericPmWithTdiUpdateInfo8: GenericPmWithTdiUpdateInfo8 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

