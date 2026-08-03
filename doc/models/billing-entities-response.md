
# Billing Entities Response

*This model accepts additional fields of type unknown.*

## Structure

`BillingEntitiesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`BillingEntity[] \| undefined`](../../doc/models/billing-entity.md) | Optional | List of legal entities that can be used for the billing of orders. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BillingEntitiesResponse } from 'adyenlib';

const billingEntitiesResponse: BillingEntitiesResponse = {
  data: [
    {
      address: {
        city: 'city6',
        companyName: 'companyName8',
        country: 'country0',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      email: 'email6',
      id: 'id0',
      name: 'name0',
      taxId: 'taxId6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      address: {
        city: 'city6',
        companyName: 'companyName8',
        country: 'country0',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      email: 'email6',
      id: 'id0',
      name: 'name0',
      taxId: 'taxId6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      address: {
        city: 'city6',
        companyName: 'companyName8',
        country: 'country0',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      email: 'email6',
      id: 'id0',
      name: 'name0',
      taxId: 'taxId6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

