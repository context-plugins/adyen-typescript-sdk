
# Cartes Bancaires Response Info

## Structure

`CartesBancairesResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `siret` | `string \| undefined` | Optional | Cartes Bancaires SIRET. Format: 14 digits. |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { CartesBancairesResponseInfo, Type8Enum } from 'adyen';

const cartesBancairesResponseInfo: CartesBancairesResponseInfo = {
  siret: 'siret4',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

