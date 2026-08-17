
# Generic Pm with Tdi Update Info 5

Details to provide if `type` is **eft_directdebit_CA** (EFT PAD).

## Structure

`GenericPmWithTdiUpdateInfo5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiUpdateInfo5, Type8Enum } from 'adyen';

const genericPmWithTdiUpdateInfo5: GenericPmWithTdiUpdateInfo5 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

