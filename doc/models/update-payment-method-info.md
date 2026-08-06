
# Update Payment Method Info

*This model accepts additional fields of type unknown.*

## Structure

`UpdatePaymentMethodInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accel` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `affirm` | [`AffirmUpdateInfo \| undefined`](../../doc/models/affirm-update-info.md) | Optional | - |
| `bcmc` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `carnet` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `cartesBancaires` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `cashapp` | [`CashAppUpdateInfo \| undefined`](../../doc/models/cash-app-update-info.md) | Optional | - |
| `countries` | `string[] \| undefined` | Optional | The list of countries where a payment method is available. By default, all countries supported by the payment method. |
| `cup` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `currencies` | `string[] \| undefined` | Optional | The list of currencies that a payment method supports. By default, all currencies supported by the payment method. |
| `customRoutingFlags` | `string[] \| undefined` | Optional | Custom routing flags for acquirer routing. |
| `diners` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `discover` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `eftDirectdebitCa` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `eftposAustralia` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | Indicates whether the payment method is enabled (**true**) or disabled (**false**). |
| `girocard` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `ideal` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `interacCard` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `jcb` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `maestro` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `maestroUsa` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `mc` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `nyce` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `paybybankPlaid` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `pulse` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `sepadirectdebit` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `star` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `storeId` | `string \| undefined` | Optional | The store for this payment method |
| `storeIds` | `string[] \| undefined` | Optional | The list of stores for this payment method |
| `visa` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type33, UpdatePaymentMethodInfo } from 'adyen';

const updatePaymentMethodInfo: UpdatePaymentMethodInfo = {
  accel: {
    transactionDescription: {
      doingBusinessAsName: 'doingBusinessAsName0',
      type: Type33.Fixed,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  affirm: {
    pricePlan: 'pricePlan8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  bcmc: {
    transactionDescription: {
      doingBusinessAsName: 'doingBusinessAsName0',
      type: Type33.Fixed,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  carnet: {
    transactionDescription: {
      doingBusinessAsName: 'doingBusinessAsName0',
      type: Type33.Fixed,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  cartesBancaires: {
    transactionDescription: {
      doingBusinessAsName: 'doingBusinessAsName0',
      type: Type33.Fixed,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

