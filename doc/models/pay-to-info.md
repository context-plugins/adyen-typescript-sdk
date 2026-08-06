
# Pay to Info

*This model accepts additional fields of type unknown.*

## Structure

`PayToInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantName` | `string` | Required | Merchant name displayed to the shopper in the Agreements |
| `payToPurpose` | `string` | Required | Represents the purpose of the Agreements created, it relates to the business type<br>**Allowed values**: mortgage, utility, loan, gambling, retail, salary, personal, government, pension, tax, other |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayToInfo } from 'adyen';

const payToInfo: PayToInfo = {
  merchantName: 'merchantName8',
  payToPurpose: 'payToPurpose6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

