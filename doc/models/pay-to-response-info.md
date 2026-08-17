
# Pay to Response Info

## Structure

`PayToResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantName` | `string \| undefined` | Optional | Merchant name displayed to the shopper in the Agreements |
| `payToPurpose` | `string \| undefined` | Optional | Represents the purpose of the Agreements created, it relates to the business type<br>**Allowed values**: mortgage, utility, loan, gambling, retail, salary, personal, government, pension, tax, other |

## Example

```ts
import { PayToResponseInfo } from 'adyen';

const payToResponseInfo: PayToResponseInfo = {
  merchantName: 'merchantName8',
  payToPurpose: 'payToPurpose4',
};
```

