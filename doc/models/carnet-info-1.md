
# Carnet Info 1

Details to provide if `type` is **carnet**.

## Structure

`CarnetInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addMccAcronym` | `boolean \| undefined` | Optional | Indicates whether to add the MCC acronym to the merchant name for Prosa acquirer in Mexico.<br>When set to **true**, the MCC acronym is automatically appended to the merchant name.<br>Default: **false**. |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { CarnetInfo1, Type8Enum } from 'adyen';

const carnetInfo1: CarnetInfo1 = {
  addMccAcronym: false,
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

