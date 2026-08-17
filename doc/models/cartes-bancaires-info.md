
# Cartes Bancaires Info

## Structure

`CartesBancairesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `siret` | `string` | Required | Cartes Bancaires SIRET. Format: 14 digits. |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { CartesBancairesInfo, Type8Enum } from 'adyen';

const cartesBancairesInfo: CartesBancairesInfo = {
  siret: 'siret6',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

