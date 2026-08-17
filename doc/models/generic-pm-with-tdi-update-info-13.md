
# Generic Pm with Tdi Update Info 13

Details to provide if `type` is **mc**.

## Structure

`GenericPmWithTdiUpdateInfo13`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiUpdateInfo13, Type8Enum } from 'adyen';

const genericPmWithTdiUpdateInfo13: GenericPmWithTdiUpdateInfo13 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

