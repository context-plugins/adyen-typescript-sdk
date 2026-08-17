
# Utility Response

## Structure

`UtilityResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `originKeys` | `Record<string, string> \| undefined` | Optional | The list of origin keys for all requested domains. For each list item, the key is the domain and the value is the origin key. |

## Example

```ts
import { UtilityResponse } from 'adyen';

const utilityResponse: UtilityResponse = {
  originKeys: {
    'key0': 'originKeys0'
  },
};
```

