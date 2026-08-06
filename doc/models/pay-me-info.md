
# Pay Me Info

*This model accepts additional fields of type unknown.*

## Structure

`PayMeInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string` | Required | Merchant display name |
| `logo` | `string` | Required | Merchant logo. Format: Base64-encoded string. |
| `supportEmail` | `string` | Required | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayMeInfo } from 'adyen';

const payMeInfo: PayMeInfo = {
  displayName: 'displayName4',
  logo: 'logo4',
  supportEmail: 'supportEmail4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

