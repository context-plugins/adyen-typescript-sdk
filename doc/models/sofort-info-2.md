
# Sofort Info 2

Sofort details.

## Structure

`SofortInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string` | Required | Sofort currency code. For example, **EUR**. |
| `logo` | `string` | Required | Sofort logo. Format: Base64-encoded string. |

## Example

```ts
import { SofortInfo2 } from 'adyen';

const sofortInfo2: SofortInfo2 = {
  currencyCode: 'currencyCode0',
  logo: 'logo6',
};
```

