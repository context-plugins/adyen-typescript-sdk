
# Cartes Bancaires Response Info 1

**cartesbancaire** details

*This model accepts additional fields of type unknown.*

## Structure

`CartesBancairesResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `siret` | `string \| undefined` | Optional | Cartes Bancaires SIRET. Format: 14 digits. |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CartesBancairesResponseInfo1, Type33 } from 'adyen';

const cartesBancairesResponseInfo1: CartesBancairesResponseInfo1 = {
  siret: 'siret4',
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

