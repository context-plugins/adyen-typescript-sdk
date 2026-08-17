
# Number and Bic Account Identification

## Structure

`NumberAndBicAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace. The length and format depends on the bank or country.<br><br>**Constraints**: *Maximum Length*: `34` |
| `additionalBankIdentification` | [`AdditionalBankIdentification1 \| undefined`](../../doc/models/additional-bank-identification-1.md) | Optional | Additional identification codes of the bank. Some banks may require these identifiers for cross-border transfers. |
| `bic` | `string` | Required | The bank's 8- or 11-character BIC or SWIFT code.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `11` |
| `type` | `string` | Required, Constant | **numberAndBic**<br><br>**Value**: `'numberAndBic'` |

## Example

```ts
import { NumberAndBicAccountIdentification, Type510Enum } from 'adyen';

const numberAndBicAccountIdentification: NumberAndBicAccountIdentification = {
  accountNumber: 'accountNumber6',
  bic: 'bic0',
  type: 'numberAndBic',
  additionalBankIdentification: {
    code: 'code2',
    type: Type510Enum.GbSortCode,
  },
};
```

