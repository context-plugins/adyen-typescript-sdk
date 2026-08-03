
# Tax Form Summary Response

*This model accepts additional fields of type unknown.*

## Structure

`TaxFormSummaryResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Summary[]`](../../doc/models/summary.md) | Required | A list of tax form summaries, where each summary consists of the legal entity and the tax years in which the legal entity has a tax form. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TaxFormSummaryResponse } from 'adyenlib';

const taxFormSummaryResponse: TaxFormSummaryResponse = {
  data: [
    {
      legalEntityId: 'legalEntityId6',
      taxYears: [
        221,
        222,
        223
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

