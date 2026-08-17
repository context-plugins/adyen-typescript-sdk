
# Agency

## Structure

`Agency`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceNumber` | `string \| undefined` | Optional | The reference number for the invoice, issued by the agency.<br><br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 6 characters<br>* **additionalData key:** `airline.agency_invoice_number` |
| `planName` | `string \| undefined` | Optional | The two-letter agency plan identifier.<br><br>* Encoding: ASCII<br>* minLength: 2 characters<br>* maxLength: 2 characters<br>* **additionalData key:** `airline.agency_plan_name` |

## Example

```ts
import { Agency } from 'adyen';

const agency: Agency = {
  invoiceNumber: 'invoiceNumber6',
  planName: 'planName6',
};
```

