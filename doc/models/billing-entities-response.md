
# Billing Entities Response

## Structure

`BillingEntitiesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`BillingEntity[] \| undefined`](../../doc/models/billing-entity.md) | Optional | List of legal entities that can be used for the billing of orders. |

## Example

```ts
import { BillingEntitiesResponse } from 'adyen';

const billingEntitiesResponse: BillingEntitiesResponse = {
  data: [
    {
      address: {
        city: 'city6',
        companyName: 'companyName8',
        country: 'country0',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
      },
      email: 'email6',
      id: 'id0',
      name: 'name0',
      taxId: 'taxId6',
    },
    {
      address: {
        city: 'city6',
        companyName: 'companyName8',
        country: 'country0',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
      },
      email: 'email6',
      id: 'id0',
      name: 'name0',
      taxId: 'taxId6',
    },
    {
      address: {
        city: 'city6',
        companyName: 'companyName8',
        country: 'country0',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
      },
      email: 'email6',
      id: 'id0',
      name: 'name0',
      taxId: 'taxId6',
    }
  ],
};
```

