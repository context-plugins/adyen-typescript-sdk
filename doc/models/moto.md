
# Moto

*This model accepts additional fields of type unknown.*

## Structure

`Moto`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableMoto` | `boolean \| undefined` | Optional | Enable MOTO transactions. |
| `maxAmount` | `number \| undefined` | Optional | The maximum amount for MOTO transactions. You need to set the currency for this amount using the [`standalone.currencyCode`](https://docs.adyen.com/api-explorer/Management/1/patch/companies/(companyId)/terminalSettings#request-standalone-currencyCode) parameter. Do not enable standalone, unless you are using a standalone solution. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Moto } from 'adyen';

const moto: Moto = {
  enableMoto: false,
  maxAmount: 152,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

