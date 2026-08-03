
# Temporary Services

*This model accepts additional fields of type unknown.*

## Structure

`TemporaryServices`

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
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TemporaryServices } from 'adyenlib';

const temporaryServices: TemporaryServices = {
  employeeName: 'employeeName2',
  endDate: '2016-03-13T12:52:32.123Z',
  hourRate: 184,
  hoursWorked: 124,
  jobDescription: 'jobDescription6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

