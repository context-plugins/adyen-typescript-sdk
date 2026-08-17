
# Generic Pm with Tdi Info 8

Details to provide if `type` is **maestro**.
In the US, `maestro` is not supported; use `maestro_usa` instead.

## Structure

`GenericPmWithTdiInfo8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiInfo8, Type8Enum } from 'adyen';

const genericPmWithTdiInfo8: GenericPmWithTdiInfo8 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

