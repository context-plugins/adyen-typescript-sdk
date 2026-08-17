
# Generic Pm with Tdi Update Info 9

Details to provide if `type` is **interac_card**.

## Structure

`GenericPmWithTdiUpdateInfo9`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiUpdateInfo9, Type8Enum } from 'adyen';

const genericPmWithTdiUpdateInfo9: GenericPmWithTdiUpdateInfo9 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

