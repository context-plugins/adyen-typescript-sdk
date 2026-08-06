
# Sofort Response Info

*This model accepts additional fields of type unknown.*

## Structure

`SofortResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string \| undefined` | Optional | Sofort currency code. For example, **EUR**. |
| `logo` | `string \| undefined` | Optional | Sofort logo. Format: Base64-encoded string. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SofortResponseInfo } from 'adyen';

const sofortResponseInfo: SofortResponseInfo = {
  currencyCode: 'currencyCode0',
  logo: 'logo4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

