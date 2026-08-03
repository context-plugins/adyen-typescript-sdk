
# Twint Response Info

*This model accepts additional fields of type unknown.*

## Structure

`TwintResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string \| undefined` | Optional | Twint logo. Format: Base64-encoded string. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TwintResponseInfo } from 'adyenlib';

const twintResponseInfo: TwintResponseInfo = {
  logo: 'logo0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

