
# Pay to Response Info 1

**payto** details

*This model accepts additional fields of type unknown.*

## Structure

`PayToResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantName` | `string \| undefined` | Optional | Merchant name displayed to the shopper in the Agreements |
| `payToPurpose` | `string \| undefined` | Optional | Represents the purpose of the Agreements created, it relates to the business type<br>**Allowed values**: mortgage, utility, loan, gambling, retail, salary, personal, government, pension, tax, other |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayToResponseInfo1 } from 'adyenlib';

const payToResponseInfo1: PayToResponseInfo1 = {
  merchantName: 'merchantName0',
  payToPurpose: 'payToPurpose6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

