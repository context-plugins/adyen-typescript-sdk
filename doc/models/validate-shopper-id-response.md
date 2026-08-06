
# Validate Shopper Id Response

*This model accepts additional fields of type unknown.*

## Structure

`ValidateShopperIdResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string \| undefined` | Optional | Reason for the result. |
| `result` | [`Result1 \| undefined`](../../doc/models/result-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Result1, ValidateShopperIdResponse } from 'adyen';

const validateShopperIdResponse: ValidateShopperIdResponse = {
  reason: 'reason2',
  result: Result1.Valid,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

