
# Cartes Bancaires Update Info 1

Details to provide if `type` is **cartebancaire**.

## Structure

`CartesBancairesUpdateInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { CartesBancairesUpdateInfo1, Type8Enum } from 'adyen';

const cartesBancairesUpdateInfo1: CartesBancairesUpdateInfo1 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

