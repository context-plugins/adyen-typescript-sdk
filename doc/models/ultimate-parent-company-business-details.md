
# Ultimate Parent Company Business Details

## Structure

`UltimateParentCompanyBusinessDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `legalBusinessName` | `string \| undefined` | Optional | The legal name of the company. |
| `registrationNumber` | `string \| undefined` | Optional | The registration number of the company. |
| `stockExchange` | `string \| undefined` | Optional | Market Identifier Code (MIC). |
| `stockNumber` | `string \| undefined` | Optional | International Securities Identification Number (ISIN). |
| `stockTicker` | `string \| undefined` | Optional | Stock Ticker symbol. |

## Example

```ts
import { UltimateParentCompanyBusinessDetails } from 'adyen';

const ultimateParentCompanyBusinessDetails: UltimateParentCompanyBusinessDetails = {
  legalBusinessName: 'legalBusinessName0',
  registrationNumber: 'registrationNumber2',
  stockExchange: 'stockExchange6',
  stockNumber: 'stockNumber8',
  stockTicker: 'stockTicker8',
};
```

