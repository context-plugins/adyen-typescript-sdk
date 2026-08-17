
# Validate Shopper Id Response

## Structure

`ValidateShopperIdResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string \| undefined` | Optional | Reason for the result. |
| `result` | [`Result1Enum \| undefined`](../../doc/models/result-1-enum.md) | Optional | Result of the validation. Ex: valid, invalid, unknown |

## Example

```ts
import { Result1Enum, ValidateShopperIdResponse } from 'adyen';

const validateShopperIdResponse: ValidateShopperIdResponse = {
  reason: 'reason2',
  result: Result1Enum.VALID,
};
```

