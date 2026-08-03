
# Billing Entity

*This model accepts additional fields of type unknown.*

## Structure

`BillingEntity`

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
import { BillingEntity } from 'adyenlib';

const billingEntity: BillingEntity = {
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
  email: 'email0',
  id: 'id6',
  name: 'name6',
  taxId: 'taxId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

