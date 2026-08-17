
# Temporary Services 2

[Temporary services enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/temporary-services/) that may be required for processing the transaction and/or for interchange savings.

## Structure

`TemporaryServices2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `employeeName` | `string \| undefined` | Optional | The name or ID of the person working in a temporary capacity.<br><br>* Format: ASCII<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `enhancedSchemeData.employeeName` |
| `endDate` | `string \| undefined` | Optional | The billing period end date.<br><br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `enhancedSchemeData.tempWeekEnding` |
| `hourRate` | `number \| undefined` | Optional | The hourly rate for the temporary services, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `enhancedSchemeData.regularHoursRate` |
| `hoursWorked` | `number \| undefined` | Optional | The number of hours worked during the billing period.<br><br>* Format: Numeric<br>* **additionalData key:** `enhancedSchemeData.regularHoursWorked` |
| `jobDescription` | `string \| undefined` | Optional | The job description of the person working in a temporary capacity.<br><br>* Format: ASCII<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `enhancedSchemeData.jobDescription` |
| `serviceRequestor` | `string \| undefined` | Optional | The name of the person requesting the temporary services.<br><br>* Format: ASCII<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `enhancedSchemeData.requestName` |
| `startDate` | `string \| undefined` | Optional | The billing period start date.<br><br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `enhancedSchemeData.tempStartDate` |

## Example

```ts
import { TemporaryServices2 } from 'adyen';

const temporaryServices2: TemporaryServices2 = {
  employeeName: 'employeeName4',
  endDate: '2016-03-13T12:52:32.123Z',
  hourRate: 14,
  hoursWorked: 182,
  jobDescription: 'jobDescription4',
};
```

