
# Fund Origin

## Structure

`FundOrigin`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingAddress` | [`Address3 \| undefined`](../../doc/models/address-3.md) | Optional | The address where to send the invoice. |
| `shopperEmail` | `string \| undefined` | Optional | The email address of the person funding the money. |
| `shopperName` | [`Name1 \| undefined`](../../doc/models/name-1.md) | Optional | The name of the person funding the money. |
| `telephoneNumber` | `string \| undefined` | Optional | The phone number of the person funding the money. |
| `walletIdentifier` | `string \| undefined` | Optional | The unique identifier of the wallet where the funds are coming from. |

## Example

```ts
import { FundOrigin } from 'adyen';

const fundOrigin: FundOrigin = {
  billingAddress: {
    city: 'city8',
    country: 'country6',
    houseNumberOrName: 'houseNumberOrName0',
    postalCode: 'postalCode6',
    street: 'street2',
    stateOrProvince: 'stateOrProvince0',
  },
  shopperEmail: 'shopperEmail6',
  shopperName: {
    firstName: 'firstName2',
    lastName: 'lastName6',
  },
  telephoneNumber: 'telephoneNumber2',
  walletIdentifier: 'walletIdentifier4',
};
```

