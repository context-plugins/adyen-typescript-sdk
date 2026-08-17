
# Generic Pm with Tdi Update Info 10

Details to provide if `type` is **jcb**.
For merchants operating in Japan, `midNumber`, `reuseMidNumber`, and `serviceLevel` fields are required.
For merchants operating outside of Japan, these fields are not required.

## Structure

`GenericPmWithTdiUpdateInfo10`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiUpdateInfo10, Type8Enum } from 'adyen';

const genericPmWithTdiUpdateInfo10: GenericPmWithTdiUpdateInfo10 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

