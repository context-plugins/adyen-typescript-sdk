
# Additional Data Temporary Services

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalDataTemporaryServices`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enhancedSchemeDataCustomerReference` | `string \| undefined` | Optional | The customer code, if supplied by a customer.<br><br>* Encoding: ASCII<br>* maxLength: 25 |
| `enhancedSchemeDataEmployeeName` | `string \| undefined` | Optional | The name or ID of the person working in a temporary capacity.<br><br>* maxLength: 40.<br>* Must not be all spaces.<br>  *Must not be all zeros. |
| `enhancedSchemeDataJobDescription` | `string \| undefined` | Optional | The job description of the person working in a temporary capacity.<br><br>* maxLength: 40<br>* Must not be all spaces.<br>  *Must not be all zeros. |
| `enhancedSchemeDataRegularHoursRate` | `string \| undefined` | Optional | The amount paid for regular hours worked, [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* maxLength: 7<br>* Must not be empty<br>* Can be all zeros |
| `enhancedSchemeDataRegularHoursWorked` | `string \| undefined` | Optional | The hours worked.<br><br>* maxLength: 7<br>* Must not be empty<br>* Can be all zeros |
| `enhancedSchemeDataRequestName` | `string \| undefined` | Optional | The name of the person requesting temporary services.<br><br>* maxLength: 40<br>* Must not be all zeros<br>* Must not be all spaces |
| `enhancedSchemeDataTempStartDate` | `string \| undefined` | Optional | The billing period start date.<br><br>* Format: ddMMyy<br>* maxLength: 6 |
| `enhancedSchemeDataTempWeekEnding` | `string \| undefined` | Optional | The billing period end date.<br><br>* Format: ddMMyy<br>* maxLength: 6 |
| `enhancedSchemeDataTotalTaxAmount` | `string \| undefined` | Optional | The total tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes). For example, 2000 means USD 20.00<br><br>* maxLength: 12 |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdditionalDataTemporaryServices } from 'adyen';

const additionalDataTemporaryServices: AdditionalDataTemporaryServices = {
  enhancedSchemeDataCustomerReference: 'enhancedSchemeData.customerReference2',
  enhancedSchemeDataEmployeeName: 'enhancedSchemeData.employeeName8',
  enhancedSchemeDataJobDescription: 'enhancedSchemeData.jobDescription8',
  enhancedSchemeDataRegularHoursRate: 'enhancedSchemeData.regularHoursRate6',
  enhancedSchemeDataRegularHoursWorked: 'enhancedSchemeData.regularHoursWorked4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

