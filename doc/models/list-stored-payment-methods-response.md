
# List Stored Payment Methods Response

*This model accepts additional fields of type unknown.*

## Structure

`ListStoredPaymentMethodsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string \| undefined` | Optional | Your merchant account. |
| `shopperReference` | `string \| undefined` | Optional | Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br><br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| `storedPaymentMethods` | [`StoredPaymentMethodResource[] \| undefined`](../../doc/models/stored-payment-method-resource.md) | Optional | List of all stored payment methods. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListStoredPaymentMethodsResponse } from 'adyen';

const listStoredPaymentMethodsResponse: ListStoredPaymentMethodsResponse = {
  merchantAccount: 'merchantAccount0',
  shopperReference: 'shopperReference6',
  storedPaymentMethods: [
    {
      alias: 'alias4',
      aliasType: 'aliasType6',
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
      brand: 'brand6',
      cardBin: 'cardBin8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      alias: 'alias4',
      aliasType: 'aliasType6',
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
      brand: 'brand6',
      cardBin: 'cardBin8',
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

