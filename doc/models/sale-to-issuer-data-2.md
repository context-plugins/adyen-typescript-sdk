
# Sale to Issuer Data 2

*This model accepts additional fields of type unknown.*

## Structure

`SaleToIssuerData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementReference` | `string \| undefined` | Optional | Label to print on the bank statement.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SaleToIssuerData2 } from 'adyenlib';

const saleToIssuerData2: SaleToIssuerData2 = {
  statementReference: 'StatementReference2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

