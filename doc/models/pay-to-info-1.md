
# Pay to Info 1

Details to provide if `type` is **payto**.

*This model accepts additional fields of type unknown.*

## Structure

`PayToInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantName` | `string` | Required | Merchant name displayed to the shopper in the Agreements |
| `payToPurpose` | `string` | Required | Represents the purpose of the Agreements created, it relates to the business type<br>**Allowed values**: mortgage, utility, loan, gambling, retail, salary, personal, government, pension, tax, other |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayToInfo1 } from 'adyen';

const payToInfo1: PayToInfo1 = {
  merchantName: 'merchantName2',
  payToPurpose: 'payToPurpose2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

