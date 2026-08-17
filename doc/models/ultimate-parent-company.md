
# Ultimate Parent Company

## Structure

`UltimateParentCompany`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`ViasAddress1 \| undefined`](../../doc/models/vias-address-1.md) | Optional | Address of the ultimate parent company. |
| `businessDetails` | [`UltimateParentCompanyBusinessDetails2 \| undefined`](../../doc/models/ultimate-parent-company-business-details-2.md) | Optional | Details about the ultimate parent company's business. |
| `ultimateParentCompanyCode` | `string \| undefined` | Optional | Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create an ultimate parent company. Required when updating an existing entry in an `/updateAccountHolder` request. |

## Example

```ts
import { UltimateParentCompany } from 'adyen';

const ultimateParentCompany: UltimateParentCompany = {
  address: {
    country: 'country0',
    city: 'city6',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince4',
    street: 'street6',
  },
  businessDetails: {
    legalBusinessName: 'legalBusinessName8',
    registrationNumber: 'registrationNumber6',
    stockExchange: 'stockExchange4',
    stockNumber: 'stockNumber6',
    stockTicker: 'stockTicker6',
  },
  ultimateParentCompanyCode: 'ultimateParentCompanyCode6',
};
```

