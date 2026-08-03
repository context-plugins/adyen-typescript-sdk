
# Merchant Account

*This model accepts additional fields of type unknown.*

## Structure

`MerchantAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `inStoreTerminals` | `string[] \| undefined` | Optional | List of terminals assigned to this merchant account as in-store terminals. This means that the terminal is ready to be boarded, or is already boarded. |
| `inventoryTerminals` | `string[] \| undefined` | Optional | List of terminals assigned to the inventory of this merchant account. |
| `merchantAccount` | `string` | Required | The merchant account. |
| `stores` | [`Store1[] \| undefined`](../../doc/models/store-1.md) | Optional | Array of stores under this merchant account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MerchantAccount } from 'adyenlib';

const merchantAccount: MerchantAccount = {
  merchantAccount: 'merchantAccount0',
  inStoreTerminals: [
    'inStoreTerminals7'
  ],
  inventoryTerminals: [
    'inventoryTerminals2',
    'inventoryTerminals3'
  ],
  stores: [
    {
      store: 'store8',
      address: {
        city: 'city6',
        countryCode: 'countryCode8',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
        streetAddress: 'streetAddress6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      description: 'description8',
      inStoreTerminals: [
        'inStoreTerminals3',
        'inStoreTerminals2',
        'inStoreTerminals1'
      ],
      merchantAccountCode: 'merchantAccountCode0',
      status: 'status0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      store: 'store8',
      address: {
        city: 'city6',
        countryCode: 'countryCode8',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
        streetAddress: 'streetAddress6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      description: 'description8',
      inStoreTerminals: [
        'inStoreTerminals3',
        'inStoreTerminals2',
        'inStoreTerminals1'
      ],
      merchantAccountCode: 'merchantAccountCode0',
      status: 'status0',
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

