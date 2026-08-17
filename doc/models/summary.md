
# Summary

## Structure

`Summary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `legalEntityId` | `string` | Required | The unique identifier of the legal entity. |
| `taxYears` | `number[]` | Required | The tax years for which the legal entity has a tax form. |

## Example

```ts
import { Summary } from 'adyen';

const summary: Summary = {
  legalEntityId: 'legalEntityId2',
  taxYears: [
    111
  ],
};
```

