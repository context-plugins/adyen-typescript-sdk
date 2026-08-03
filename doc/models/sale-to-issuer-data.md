
# Sale to Issuer Data

Sale information intended for the Issuer.
The POI System receives this information and sends it to the Acquirer for the Issuer without any change.

*This model accepts additional fields of type unknown.*

## Structure

`SaleToIssuerData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementReference` | `string \| undefined` | Optional | Label to print on the bank statement.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SaleToIssuerData } from 'adyenlib';

const saleToIssuerData: SaleToIssuerData = {
  statementReference: 'StatementReference0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

