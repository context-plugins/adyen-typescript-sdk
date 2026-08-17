
# Get Tax Form Request

## Structure

`GetTaxFormRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The account holder code you provided when you created the account holder. |
| `formType` | `string` | Required | Type of the requested tax form. For example, 1099-K. |
| `year` | `number` | Required | Applicable tax year in the YYYY format. |

## Example

```ts
import { GetTaxFormRequest } from 'adyen';

const getTaxFormRequest: GetTaxFormRequest = {
  accountHolderCode: 'accountHolderCode6',
  formType: 'formType4',
  year: 242,
};
```

