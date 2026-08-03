
# Response Additional Data Opi

*This model accepts additional fields of type unknown.*

## Structure

`ResponseAdditionalDataOpi`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `opiTransToken` | `string \| undefined` | Optional | Returned in the response if you included `opi.includeTransToken: true` in an ecommerce payment request. This contains an Oracle Payment Interface token that you can store in your Oracle Opera database to identify tokenized ecommerce transactions. For more information and required settings, see [Oracle Opera](https://docs.adyen.com/plugins/oracle-opera#opi-token-ecommerce). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResponseAdditionalDataOpi } from 'adyenlib';

const responseAdditionalDataOpi: ResponseAdditionalDataOpi = {
  opiTransToken: 'opi.transToken8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

