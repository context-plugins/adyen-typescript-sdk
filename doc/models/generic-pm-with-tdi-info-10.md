
# Generic Pm with Tdi Info 10

Details to provide if `type` is **mc**.

## Structure

`GenericPmWithTdiInfo10`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiInfo10, Type8Enum } from 'adyen';

const genericPmWithTdiInfo10: GenericPmWithTdiInfo10 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

