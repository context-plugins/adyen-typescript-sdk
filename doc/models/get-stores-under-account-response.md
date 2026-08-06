
# Get Stores Under Account Response

*This model accepts additional fields of type unknown.*

## Structure

`GetStoresUnderAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `stores` | [`Store1[] \| undefined`](../../doc/models/store-1.md) | Optional | Array that returns a list of all stores for the specified merchant account, or for all merchant accounts under the company account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetStoresUnderAccountResponse } from 'adyen';

const getStoresUnderAccountResponse: GetStoresUnderAccountResponse = {
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

