
# Twint Response Info 2

**twint** details

*This model accepts additional fields of type unknown.*

## Structure

`TwintResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string \| undefined` | Optional | Twint logo. Format: Base64-encoded string. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TwintResponseInfo2 } from 'adyen';

const twintResponseInfo2: TwintResponseInfo2 = {
  logo: 'logo2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

