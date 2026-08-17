
# Generic Pm with Tdi Info 6

Details to provide if `type` is **ideal**.

## Structure

`GenericPmWithTdiInfo6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiInfo6, Type8Enum } from 'adyen';

const genericPmWithTdiInfo6: GenericPmWithTdiInfo6 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

