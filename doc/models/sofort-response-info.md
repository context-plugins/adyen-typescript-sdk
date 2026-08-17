
# Sofort Response Info

## Structure

`SofortResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string \| undefined` | Optional | Sofort currency code. For example, **EUR**. |
| `logo` | `string \| undefined` | Optional | Sofort logo. Format: Base64-encoded string. |

## Example

```ts
import { SofortResponseInfo } from 'adyen';

const sofortResponseInfo: SofortResponseInfo = {
  currencyCode: 'currencyCode0',
  logo: 'logo4',
};
```

