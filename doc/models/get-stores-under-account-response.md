
# Get Stores Under Account Response

## Structure

`GetStoresUnderAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `stores` | [`Store1[] \| undefined`](../../doc/models/store-1.md) | Optional | Array that returns a list of all stores for the specified merchant account, or for all merchant accounts under the company account. |

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
      },
      description: 'description8',
      inStoreTerminals: [
        'inStoreTerminals3',
        'inStoreTerminals2',
        'inStoreTerminals1'
      ],
      merchantAccountCode: 'merchantAccountCode0',
      status: 'status0',
    },
    {
      store: 'store8',
      address: {
        city: 'city6',
        countryCode: 'countryCode8',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
        streetAddress: 'streetAddress6',
      },
      description: 'description8',
      inStoreTerminals: [
        'inStoreTerminals3',
        'inStoreTerminals2',
        'inStoreTerminals1'
      ],
      merchantAccountCode: 'merchantAccountCode0',
      status: 'status0',
    },
    {
      store: 'store8',
      address: {
        city: 'city6',
        countryCode: 'countryCode8',
        postalCode: 'postalCode8',
        stateOrProvince: 'stateOrProvince4',
        streetAddress: 'streetAddress6',
      },
      description: 'description8',
      inStoreTerminals: [
        'inStoreTerminals3',
        'inStoreTerminals2',
        'inStoreTerminals1'
      ],
      merchantAccountCode: 'merchantAccountCode0',
      status: 'status0',
    }
  ],
};
```

