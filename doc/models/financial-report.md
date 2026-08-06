
# Financial Report

*This model accepts additional fields of type unknown.*

## Structure

`FinancialReport`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `annualTurnover` | `string \| undefined` | Optional | The annual turnover of the business. |
| `balanceSheetTotal` | `string \| undefined` | Optional | The balance sheet total of the business. |
| `currencyOfFinancialData` | `string \| undefined` | Optional | The currency used for the annual turnover, balance sheet total, and net assets. |
| `dateOfFinancialData` | `string \| undefined` | Optional | The date the financial data were provided, in YYYY-MM-DD format. |
| `employeeCount` | `string \| undefined` | Optional | The number of employees of the business. |
| `netAssets` | `string \| undefined` | Optional | The net assets of the business. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FinancialReport } from 'adyen';

const financialReport: FinancialReport = {
  annualTurnover: 'annualTurnover6',
  balanceSheetTotal: 'balanceSheetTotal4',
  currencyOfFinancialData: 'currencyOfFinancialData6',
  dateOfFinancialData: 'dateOfFinancialData0',
  employeeCount: 'employeeCount0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

