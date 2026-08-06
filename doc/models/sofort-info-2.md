
# Sofort Info 2

Sofort details.

*This model accepts additional fields of type unknown.*

## Structure

`SofortInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string` | Required | Sofort currency code. For example, **EUR**. |
| `logo` | `string` | Required | Sofort logo. Format: Base64-encoded string. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SofortInfo2 } from 'adyen';

const sofortInfo2: SofortInfo2 = {
  currencyCode: 'currencyCode0',
  logo: 'logo6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

