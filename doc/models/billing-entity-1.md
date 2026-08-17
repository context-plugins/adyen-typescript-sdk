
# Billing Entity 1

The details of the entity that the order is billed to.

## Structure

`BillingEntity1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address11 \| undefined`](../../doc/models/address-11.md) | Optional | The address details of the billing entity. |
| `email` | `string \| undefined` | Optional | The email address of the billing entity. |
| `id` | `string \| undefined` | Optional | The unique identifier of the billing entity, for use as `billingEntityId` when creating an order. |
| `name` | `string \| undefined` | Optional | The unique name of the billing entity. |
| `taxId` | `string \| undefined` | Optional | The tax number of the billing entity. |

## Example

```ts
import { BillingEntity1 } from 'adyen';

const billingEntity1: BillingEntity1 = {
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
};
```

