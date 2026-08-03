
# Healthcare

*This model accepts additional fields of type unknown.*

## Structure

`Healthcare`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dentalValue` | `bigint \| undefined` | Optional | The dental amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000 |
| `otherMedicalValue` | `bigint \| undefined` | Optional | The other medical amount not covered by the specific categories, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000 |
| `prescriptionValue` | `bigint \| undefined` | Optional | The prescription/Rx amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000 |
| `totalHealthcareValue` | `bigint` | Required | The total healthcare amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000 |
| `visionPrescriptionValue` | `bigint \| undefined` | Optional | The vision/optical prescription amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000 |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Healthcare } from 'adyenlib';

const healthcare: Healthcare = {
  totalHealthcareValue: BigInt(16),
  dentalValue: BigInt(132),
  otherMedicalValue: BigInt(150),
  prescriptionValue: BigInt(116),
  visionPrescriptionValue: BigInt(166),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

