
# Generic Pm with Tdi Info 4

Details to provide if `type` is **eftpos_australia**.

## Structure

`GenericPmWithTdiInfo4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiInfo4, Type8Enum } from 'adyen';

const genericPmWithTdiInfo4: GenericPmWithTdiInfo4 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

