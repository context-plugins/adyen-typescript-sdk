
# Get Tax Form Request

*This model accepts additional fields of type unknown.*

## Structure

`GetTaxFormRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The account holder code you provided when you created the account holder. |
| `formType` | `string` | Required | Type of the requested tax form. For example, 1099-K. |
| `year` | `number` | Required | Applicable tax year in the YYYY format. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetTaxFormRequest } from 'adyenlib';

const getTaxFormRequest: GetTaxFormRequest = {
  accountHolderCode: 'accountHolderCode6',
  formType: 'formType4',
  year: 242,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

