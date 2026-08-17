
# Response Additional Data Swish

## Structure

`ResponseAdditionalDataSwish`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `swishPayerAlias` | `string \| undefined` | Optional | A Swish shopper's telephone number. |

## Example

```ts
import { ResponseAdditionalDataSwish } from 'adyen';

const responseAdditionalDataSwish: ResponseAdditionalDataSwish = {
  swishPayerAlias: 'swish.payerAlias8',
};
```

