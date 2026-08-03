
# Billing Entity 1

The details of the entity that the order is billed to.

*This model accepts additional fields of type unknown.*

## Structure

`BillingEntity1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address6 \| undefined`](../../doc/models/address-6.md) | Optional | - |
| `email` | `string \| undefined` | Optional | The email address of the billing entity. |
| `id` | `string \| undefined` | Optional | The unique identifier of the billing entity, for use as `billingEntityId` when creating an order. |
| `name` | `string \| undefined` | Optional | The unique name of the billing entity. |
| `taxId` | `string \| undefined` | Optional | The tax number of the billing entity. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BillingEntity1 } from 'adyenlib';

const billingEntity1: BillingEntity1 = {
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
};
```

