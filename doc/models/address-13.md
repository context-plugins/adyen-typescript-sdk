
# Address 13

The address of the store.

*This model accepts additional fields of type unknown.*

## Structure

`Address13`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | - |
| `countryCode` | `string \| undefined` | Optional | - |
| `postalCode` | `string \| undefined` | Optional | - |
| `stateOrProvince` | `string \| undefined` | Optional | - |
| `streetAddress` | `string \| undefined` | Optional | - |
| `streetAddress2` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Address13 } from 'adyen';

const address13: Address13 = {
  city: 'city0',
  countryCode: 'countryCode4',
  postalCode: 'postalCode8',
  stateOrProvince: 'stateOrProvince8',
  streetAddress: 'streetAddress0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

