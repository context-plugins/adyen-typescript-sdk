
# Billing Entity

## Structure

`BillingEntity`

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
import { BillingEntity } from 'adyen';

const billingEntity: BillingEntity = {
  address: {
    city: 'city6',
    companyName: 'companyName8',
    country: 'country0',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince4',
  },
  email: 'email0',
  id: 'id6',
  name: 'name6',
  taxId: 'taxId2',
};
```

