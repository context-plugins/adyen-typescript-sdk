
# Sale to Issuer Data 1

Sale information intended for the Issuer.
Send to the Acquirer if present.

## Structure

`SaleToIssuerData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementReference` | `string \| undefined` | Optional | Label to print on the bank statement.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { SaleToIssuerData1 } from 'adyen';

const saleToIssuerData1: SaleToIssuerData1 = {
  statementReference: 'StatementReference4',
};
```

