
# Pay to Response Info 1

**payto** details

## Structure

`PayToResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantName` | `string \| undefined` | Optional | Merchant name displayed to the shopper in the Agreements |
| `payToPurpose` | `string \| undefined` | Optional | Represents the purpose of the Agreements created, it relates to the business type<br>**Allowed values**: mortgage, utility, loan, gambling, retail, salary, personal, government, pension, tax, other |

## Example

```ts
import { PayToResponseInfo1 } from 'adyen';

const payToResponseInfo1: PayToResponseInfo1 = {
  merchantName: 'merchantName0',
  payToPurpose: 'payToPurpose6',
};
```

