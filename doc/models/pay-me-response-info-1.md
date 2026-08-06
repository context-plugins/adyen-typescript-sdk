
# Pay Me Response Info 1

**payme** details

*This model accepts additional fields of type unknown.*

## Structure

`PayMeResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string \| undefined` | Optional | Merchant display name |
| `logo` | `string \| undefined` | Optional | Merchant logo. Format: Base64-encoded string. |
| `supportEmail` | `string \| undefined` | Optional | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayMeResponseInfo1 } from 'adyen';

const payMeResponseInfo1: PayMeResponseInfo1 = {
  displayName: 'displayName0',
  logo: 'logo8',
  supportEmail: 'supportEmail8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

