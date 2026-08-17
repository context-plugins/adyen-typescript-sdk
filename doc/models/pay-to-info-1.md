
# Pay to Info 1

Details to provide if `type` is **payto**.

## Structure

`PayToInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantName` | `string` | Required | Merchant name displayed to the shopper in the Agreements |
| `payToPurpose` | `string` | Required | Represents the purpose of the Agreements created, it relates to the business type<br>**Allowed values**: mortgage, utility, loan, gambling, retail, salary, personal, government, pension, tax, other |

## Example

```ts
import { PayToInfo1 } from 'adyen';

const payToInfo1: PayToInfo1 = {
  merchantName: 'merchantName2',
  payToPurpose: 'payToPurpose2',
};
```

