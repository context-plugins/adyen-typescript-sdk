
# Cartes Bancaires Info

*This model accepts additional fields of type unknown.*

## Structure

`CartesBancairesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `siret` | `string` | Required | Cartes Bancaires SIRET. Format: 14 digits. |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CartesBancairesInfo, Type33 } from 'adyen';

const cartesBancairesInfo: CartesBancairesInfo = {
  siret: 'siret6',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type33.Fixed,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

