
# Ultimate Parent Company

*This model accepts additional fields of type unknown.*

## Structure

`UltimateParentCompany`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`ViasAddress \| undefined`](../../doc/models/vias-address.md) | Optional | - |
| `businessDetails` | [`UltimateParentCompanyBusinessDetails \| undefined`](../../doc/models/ultimate-parent-company-business-details.md) | Optional | - |
| `ultimateParentCompanyCode` | `string \| undefined` | Optional | Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create an ultimate parent company. Required when updating an existing entry in an `/updateAccountHolder` request. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UltimateParentCompany } from 'adyenlib';

const ultimateParentCompany: UltimateParentCompany = {
  address: {
    country: 'country0',
    city: 'city6',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince4',
    street: 'street6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  businessDetails: {
    legalBusinessName: 'legalBusinessName8',
    registrationNumber: 'registrationNumber6',
    stockExchange: 'stockExchange4',
    stockNumber: 'stockNumber6',
    stockTicker: 'stockTicker6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  ultimateParentCompanyCode: 'ultimateParentCompanyCode6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

