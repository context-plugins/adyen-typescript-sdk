
# Pay Me Info 1

Details to provide if `type` is **payme**.

*This model accepts additional fields of type unknown.*

## Structure

`PayMeInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string` | Required | Merchant display name |
| `logo` | `string` | Required | Merchant logo. Format: Base64-encoded string. |
| `supportEmail` | `string` | Required | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayMeInfo1 } from 'adyen';

const payMeInfo1: PayMeInfo1 = {
  displayName: 'displayName0',
  logo: 'logo8',
  supportEmail: 'supportEmail8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

