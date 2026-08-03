
# Pay Me Response Info

*This model accepts additional fields of type unknown.*

## Structure

`PayMeResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string \| undefined` | Optional | Merchant display name |
| `logo` | `string \| undefined` | Optional | Merchant logo. Format: Base64-encoded string. |
| `supportEmail` | `string \| undefined` | Optional | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayMeResponseInfo } from 'adyenlib';

const payMeResponseInfo: PayMeResponseInfo = {
  displayName: 'displayName6',
  logo: 'logo4',
  supportEmail: 'supportEmail4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

