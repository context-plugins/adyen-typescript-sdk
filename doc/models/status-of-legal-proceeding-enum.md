
# Status of Legal Proceeding Enum

The status of any current or past legal action taken against the legal entity.

Possible values: **noLegalActionsTaken**, **underJudicialAdministration**, **bankruptcyInsolvency**, **otherLegalMeasures**

If the value of this field is **noLegalActionsTaken**, then `dateOfInitiationOfLegalProceeding` is not required. Otherwise, it is required.

## Enumeration

`StatusOfLegalProceedingEnum`

## Fields

| Name |
|  --- |
| `NoLegalActionsTaken` |
| `UnderJudicialAdministration` |
| `BankruptcyInsolvency` |
| `OtherLegalMeasures` |

## Example

```ts
import { StatusOfLegalProceedingEnum } from 'adyen';

const statusOfLegalProceeding = StatusOfLegalProceedingEnum.NoLegalActionsTaken;
```

