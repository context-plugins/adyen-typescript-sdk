
# Shipping Location 1

The details of the location where the order is shipped to.

*This model accepts additional fields of type unknown.*

## Structure

`ShippingLocation1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address6 \| undefined`](../../doc/models/address-6.md) | Optional | - |
| `contact` | [`Contact \| undefined`](../../doc/models/contact.md) | Optional | - |
| `id` | `string \| undefined` | Optional | The unique identifier of the shipping location, for use as `shippingLocationId` when creating an order. |
| `name` | `string \| undefined` | Optional | The unique name of the shipping location. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ShippingLocation1 } from 'adyen';

const shippingLocation1: ShippingLocation1 = {
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
  contact: {
    email: 'email4',
    firstName: 'firstName2',
    infix: 'infix6',
    lastName: 'lastName6',
    phoneNumber: 'phoneNumber2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  id: 'id0',
  name: 'name0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

