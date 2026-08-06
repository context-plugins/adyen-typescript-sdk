
# Get Terminals Under Account Response

*This model accepts additional fields of type unknown.*

## Structure

`GetTerminalsUnderAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyAccount` | `string` | Required | Your company account. |
| `inventoryTerminals` | `string[] \| undefined` | Optional | Array that returns a list of all terminals that are in the inventory of the company account. |
| `merchantAccounts` | [`MerchantAccount[] \| undefined`](../../doc/models/merchant-account.md) | Optional | Array that returns a list of all merchant accounts belonging to the company account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetTerminalsUnderAccountResponse } from 'adyen';

const getTerminalsUnderAccountResponse: GetTerminalsUnderAccountResponse = {
  companyAccount: 'companyAccount6',
  inventoryTerminals: [
    'inventoryTerminals6',
    'inventoryTerminals7'
  ],
  merchantAccounts: [
    {
      merchantAccount: 'merchantAccount2',
      inStoreTerminals: [
        'inStoreTerminals5'
      ],
      inventoryTerminals: [
        'inventoryTerminals4',
        'inventoryTerminals5'
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

