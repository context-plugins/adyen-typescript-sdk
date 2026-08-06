
# Cash App Update Info

*This model accepts additional fields of type unknown.*

## Structure

`CashAppUpdateInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logoUrl` | `string \| undefined` | Optional | The URL of the logo image shown in Cash App checkout next to payments. |
| `merchantName` | `string \| undefined` | Optional | The merchant display name shown in Cash App checkout. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CashAppUpdateInfo } from 'adyen';

const cashAppUpdateInfo: CashAppUpdateInfo = {
  logoUrl: 'logoUrl4',
  merchantName: 'merchantName4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

