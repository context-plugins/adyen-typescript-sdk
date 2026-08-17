
# Generic Pm with Tdi Info 11

Details to provide if `type` is **visa**.

## Structure

`GenericPmWithTdiInfo11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiInfo11, Type8Enum } from 'adyen';

const genericPmWithTdiInfo11: GenericPmWithTdiInfo11 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

