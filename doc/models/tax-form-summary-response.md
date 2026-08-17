
# Tax Form Summary Response

## Structure

`TaxFormSummaryResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Summary[]`](../../doc/models/summary.md) | Required | A list of tax form summaries, where each summary consists of the legal entity and the tax years in which the legal entity has a tax form. |

## Example

```ts
import { TaxFormSummaryResponse } from 'adyen';

const taxFormSummaryResponse: TaxFormSummaryResponse = {
  data: [
    {
      legalEntityId: 'legalEntityId6',
      taxYears: [
        221,
        222,
        223
      ],
    }
  ],
};
```

