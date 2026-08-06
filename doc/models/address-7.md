
# Address 7

*This model accepts additional fields of type unknown.*

## Structure

`Address7`

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
import { Address7 } from 'adyen';

const address7: Address7 = {
  city: 'city2',
  countryCode: 'countryCode8',
  postalCode: 'postalCode4',
  stateOrProvince: 'stateOrProvince0',
  streetAddress: 'streetAddress2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

