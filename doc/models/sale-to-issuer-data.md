
# Sale to Issuer Data

Sale information intended for the Issuer.
The POI System receives this information and sends it to the Acquirer for the Issuer without any change.

## Structure

`SaleToIssuerData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementReference` | `string \| undefined` | Optional | Label to print on the bank statement.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { SaleToIssuerData } from 'adyen';

const saleToIssuerData: SaleToIssuerData = {
  statementReference: 'StatementReference0',
};
```

