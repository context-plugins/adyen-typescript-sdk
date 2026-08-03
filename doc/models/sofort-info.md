
# Sofort Info

*This model accepts additional fields of type unknown.*

## Structure

`SofortInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string` | Required | Sofort currency code. For example, **EUR**. |
| `logo` | `string` | Required | Sofort logo. Format: Base64-encoded string. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SofortInfo } from 'adyenlib';

const sofortInfo: SofortInfo = {
  currencyCode: 'currencyCode6',
  logo: 'logo2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

