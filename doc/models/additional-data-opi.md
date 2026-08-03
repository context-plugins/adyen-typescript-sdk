
# Additional Data Opi

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalDataOpi`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `opiIncludeTransToken` | `string \| undefined` | Optional | Optional boolean indicator. Set to **true** if you want an ecommerce transaction to return an `opi.transToken` as additional data in the response.<br><br>You can store this Oracle Payment Interface token in your Oracle Opera database. For more information and required settings, see [Oracle Opera](https://docs.adyen.com/plugins/oracle-opera#opi-token-ecommerce). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdditionalDataOpi } from 'adyenlib';

const additionalDataOpi: AdditionalDataOpi = {
  opiIncludeTransToken: 'opi.includeTransToken6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

