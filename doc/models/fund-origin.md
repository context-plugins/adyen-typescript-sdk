
# Fund Origin

*This model accepts additional fields of type unknown.*

## Structure

`FundOrigin`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingAddress` | [`BillingAddress7 \| undefined`](../../doc/models/billing-address-7.md) | Optional | - |
| `shopperEmail` | `string \| undefined` | Optional | The email address of the person funding the money. |
| `shopperName` | [`ShopperName \| undefined`](../../doc/models/shopper-name.md) | Optional | - |
| `telephoneNumber` | `string \| undefined` | Optional | The phone number of the person funding the money. |
| `walletIdentifier` | `string \| undefined` | Optional | The unique identifier of the wallet where the funds are coming from. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FundOrigin } from 'adyenlib';

const fundOrigin: FundOrigin = {
  billingAddress: {
    city: 'city8',
    country: 'country6',
    houseNumberOrName: 'houseNumberOrName0',
    postalCode: 'postalCode6',
    street: 'street2',
    stateOrProvince: 'stateOrProvince0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  shopperEmail: 'shopperEmail6',
  shopperName: {
    firstName: 'firstName2',
    lastName: 'lastName6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  telephoneNumber: 'telephoneNumber2',
  walletIdentifier: 'walletIdentifier4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

