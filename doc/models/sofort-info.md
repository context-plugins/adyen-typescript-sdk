
# Sofort Info

## Structure

`SofortInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string` | Required | Sofort currency code. For example, **EUR**. |
| `logo` | `string` | Required | Sofort logo. Format: Base64-encoded string. |

## Example

```ts
import { SofortInfo } from 'adyen';

const sofortInfo: SofortInfo = {
  currencyCode: 'currencyCode6',
  logo: 'logo2',
};
```

