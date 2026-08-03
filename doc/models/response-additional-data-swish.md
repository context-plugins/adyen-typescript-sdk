
# Response Additional Data Swish

*This model accepts additional fields of type unknown.*

## Structure

`ResponseAdditionalDataSwish`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `swishPayerAlias` | `string \| undefined` | Optional | A Swish shopper's telephone number. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResponseAdditionalDataSwish } from 'adyenlib';

const responseAdditionalDataSwish: ResponseAdditionalDataSwish = {
  swishPayerAlias: 'swish.payerAlias8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

