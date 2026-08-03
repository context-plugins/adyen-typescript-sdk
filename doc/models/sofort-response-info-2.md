
# Sofort Response Info 2

Sofort details.

*This model accepts additional fields of type unknown.*

## Structure

`SofortResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string \| undefined` | Optional | Sofort currency code. For example, **EUR**. |
| `logo` | `string \| undefined` | Optional | Sofort logo. Format: Base64-encoded string. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SofortResponseInfo2 } from 'adyenlib';

const sofortResponseInfo2: SofortResponseInfo2 = {
  currencyCode: 'currencyCode6',
  logo: 'logo8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

