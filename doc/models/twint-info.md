
# Twint Info

*This model accepts additional fields of type unknown.*

## Structure

`TwintInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string` | Required | Twint logo. Format: Base64-encoded string. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TwintInfo } from 'adyen';

const twintInfo: TwintInfo = {
  logo: 'logo6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

