
# Show Pages

*This model accepts additional fields of type unknown.*

## Structure

`ShowPages`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankDetailsSummaryPage` | `boolean \| undefined` | Optional | Indicates whether the page with bank account details must be shown. Defaults to **true**. |
| `bankVerificationPage` | `boolean \| undefined` | Optional | Indicates whether the bank check instant verification' details must be shown. Defaults to **true**. |
| `businessDetailsSummaryPage` | `boolean \| undefined` | Optional | Indicates whether the page with the company's or organization's details must be shown. Defaults to **true**. |
| `checksOverviewPage` | `boolean \| undefined` | Optional | Indicates whether the checks overview page must be shown. Defaults to **false**. |
| `individualDetailsSummaryPage` | `boolean \| undefined` | Optional | Indicates whether the page with the individual's details must be shown. Defaults to **true**. |
| `legalArrangementsDetailsSummaryPage` | `boolean \| undefined` | Optional | Indicates whether the page with the legal arrangements' details must be shown. Defaults to **true**. |
| `manualBankAccountPage` | `boolean \| undefined` | Optional | Indicates whether the page to manually add bank account' details must be shown. Defaults to **true**. |
| `shareholderDetailsSummaryPage` | `boolean \| undefined` | Optional | Indicates whether the page with the shareholders' details must be shown. Defaults to **true**. |
| `welcomePage` | `boolean \| undefined` | Optional | Indicates whether the welcome page must be shown. Defaults to **false**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ShowPages } from 'adyenlib';

const showPages: ShowPages = {
  bankDetailsSummaryPage: false,
  bankVerificationPage: false,
  businessDetailsSummaryPage: false,
  checksOverviewPage: false,
  individualDetailsSummaryPage: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

