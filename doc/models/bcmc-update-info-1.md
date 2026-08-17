
# Bcmc Update Info 1

Details to provide if `type` is **bcmc** (Bancontact).

## Structure

`BcmcUpdateInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { BcmcUpdateInfo1, Type8Enum } from 'adyen';

const bcmcUpdateInfo1: BcmcUpdateInfo1 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

