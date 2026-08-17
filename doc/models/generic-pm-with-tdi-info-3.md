
# Generic Pm with Tdi Info 3

Details to provide if `type` is **eft_directdebit_CA** (EFT PAD).

## Structure

`GenericPmWithTdiInfo3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiInfo3, Type8Enum } from 'adyen';

const genericPmWithTdiInfo3: GenericPmWithTdiInfo3 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

