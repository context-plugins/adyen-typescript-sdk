
# Sofort Response Info 2

Sofort details.

## Structure

`SofortResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string \| undefined` | Optional | Sofort currency code. For example, **EUR**. |
| `logo` | `string \| undefined` | Optional | Sofort logo. Format: Base64-encoded string. |

## Example

```ts
import { SofortResponseInfo2 } from 'adyen';

const sofortResponseInfo2: SofortResponseInfo2 = {
  currencyCode: 'currencyCode6',
  logo: 'logo8',
};
```

