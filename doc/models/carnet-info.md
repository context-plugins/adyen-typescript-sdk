
# Carnet Info

*This model accepts additional fields of type unknown.*

## Structure

`CarnetInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addMccAcronym` | `boolean \| undefined` | Optional | Indicates whether to add the MCC acronym to the merchant name for Prosa acquirer in Mexico.<br>When set to **true**, the MCC acronym is automatically appended to the merchant name.<br>Default: **false**. |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CarnetInfo, Type33 } from 'adyen';

const carnetInfo: CarnetInfo = {
  addMccAcronym: false,
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

