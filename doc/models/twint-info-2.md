
# Twint Info 2

Details to provide if `type` is **twint**.

*This model accepts additional fields of type unknown.*

## Structure

`TwintInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string` | Required | Twint logo. Format: Base64-encoded string. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TwintInfo2 } from 'adyen';

const twintInfo2: TwintInfo2 = {
  logo: 'logo6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

