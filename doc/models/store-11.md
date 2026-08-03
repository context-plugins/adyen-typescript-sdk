
# Store 11

The store that the terminal is assigned to.

*This model accepts additional fields of type unknown.*

## Structure

`Store11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address7 \| undefined`](../../doc/models/address-7.md) | Optional | - |
| `description` | `string \| undefined` | Optional | The description of the store. |
| `inStoreTerminals` | `string[] \| undefined` | Optional | The list of terminals assigned to the store. |
| `merchantAccountCode` | `string \| undefined` | Optional | The code of the merchant account. |
| `status` | `string \| undefined` | Optional | The status of the store:<br><br>- `PreActive`: the store has been created, but not yet activated.<br><br>- `Active`: the store has been activated. This means you can process payments for this store.<br><br>- `Inactive`: the store is currently not active.<br><br>- `InactiveWithModifications`: the store is currently not active, but payment modifications such as refunds are possible.<br><br>- `Closed`: the store has been closed. |
| `store` | `string` | Required | The code of the store. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Store11 } from 'adyenlib';

const store11: Store11 = {
  store: 'store4',
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
  description: 'description4',
  inStoreTerminals: [
    'inStoreTerminals9',
    'inStoreTerminals8',
    'inStoreTerminals7'
  ],
  merchantAccountCode: 'merchantAccountCode6',
  status: 'status6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

