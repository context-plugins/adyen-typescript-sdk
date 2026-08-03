
# Shipping Locations Response

*This model accepts additional fields of type unknown.*

## Structure

`ShippingLocationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`ShippingLocation[] \| undefined`](../../doc/models/shipping-location.md) | Optional | Physical locations where orders can be shipped to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ShippingLocationsResponse } from 'adyenlib';

const shippingLocationsResponse: ShippingLocationsResponse = {
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

