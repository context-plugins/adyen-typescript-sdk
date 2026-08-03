
# Utility Response

*This model accepts additional fields of type unknown.*

## Structure

`UtilityResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `originKeys` | `Record<string, string> \| undefined` | Optional | The list of origin keys for all requested domains. For each list item, the key is the domain and the value is the origin key. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UtilityResponse } from 'adyenlib';

const utilityResponse: UtilityResponse = {
  originKeys: {
    'key0': 'originKeys0'
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

