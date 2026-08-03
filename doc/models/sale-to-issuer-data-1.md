
# Sale to Issuer Data 1

Sale information intended for the Issuer.
Send to the Acquirer if present.

*This model accepts additional fields of type unknown.*

## Structure

`SaleToIssuerData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementReference` | `string \| undefined` | Optional | Label to print on the bank statement.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SaleToIssuerData1 } from 'adyenlib';

const saleToIssuerData1: SaleToIssuerData1 = {
  statementReference: 'StatementReference4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

