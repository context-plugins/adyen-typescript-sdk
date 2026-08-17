
# Shipping Locations Response

## Structure

`ShippingLocationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`ShippingLocation[] \| undefined`](../../doc/models/shipping-location.md) | Optional | Physical locations where orders can be shipped to. |

## Example

```ts
import { ShippingLocationsResponse } from 'adyen';

const shippingLocationsResponse: ShippingLocationsResponse = {
  data: [
    {
      address: {
        city: 'city6',
        companyName: 'companyName8',
        country: 'country0',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
      },
      contact: {
        email: 'email4',
        firstName: 'firstName2',
        infix: 'infix6',
        lastName: 'lastName6',
        phoneNumber: 'phoneNumber2',
      },
      id: 'id0',
      name: 'name0',
    },
    {
      address: {
        city: 'city6',
        companyName: 'companyName8',
        country: 'country0',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
      },
      contact: {
        email: 'email4',
        firstName: 'firstName2',
        infix: 'infix6',
        lastName: 'lastName6',
        phoneNumber: 'phoneNumber2',
      },
      id: 'id0',
      name: 'name0',
    },
    {
      address: {
        city: 'city6',
        companyName: 'companyName8',
        country: 'country0',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
      },
      contact: {
        email: 'email4',
        firstName: 'firstName2',
        infix: 'infix6',
        lastName: 'lastName6',
        phoneNumber: 'phoneNumber2',
      },
      id: 'id0',
      name: 'name0',
    }
  ],
};
```

