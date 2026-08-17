
# Update Payment Method Info

## Structure

`UpdatePaymentMethodInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accel` | [`AccelUpdateInfo1 \| undefined`](../../doc/models/accel-update-info-1.md) | Optional | Details to provide if `type` is **accel**. |
| `affirm` | [`AffirmUpdateInfo1 \| undefined`](../../doc/models/affirm-update-info-1.md) | Optional | Details to provide if `type` is **affirm**. |
| `bcmc` | [`BcmcUpdateInfo1 \| undefined`](../../doc/models/bcmc-update-info-1.md) | Optional | Details to provide if `type` is **bcmc** (Bancontact). |
| `carnet` | [`GenericPmWithTdiUpdateInfo1 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-1.md) | Optional | Details to provide if `type` is **carnet**. |
| `cartesBancaires` | [`CartesBancairesUpdateInfo1 \| undefined`](../../doc/models/cartes-bancaires-update-info-1.md) | Optional | Details to provide if `type` is **cartebancaire**. |
| `cashapp` | [`CashAppUpdateInfo1 \| undefined`](../../doc/models/cash-app-update-info-1.md) | Optional | Details to provide if `type` is **cashapp**. |
| `countries` | `string[] \| undefined` | Optional | The list of countries where a payment method is available. By default, all countries supported by the payment method. |
| `cup` | [`GenericPmWithTdiUpdateInfo2 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-2.md) | Optional | Details to provide if `type` is **cup** (China Union Pay). |
| `currencies` | `string[] \| undefined` | Optional | The list of currencies that a payment method supports. By default, all currencies supported by the payment method. |
| `customRoutingFlags` | `string[] \| undefined` | Optional | Custom routing flags for acquirer routing. |
| `diners` | [`GenericPmWithTdiUpdateInfo3 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-3.md) | Optional | Details to provide if `type` is **diners**.<br>For merchants operating in Japan, Diners payments are processed through the JCB network. This means that you must include [JCB-specific fields](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-jcb) in this object. |
| `discover` | [`GenericPmWithTdiUpdateInfo4 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-4.md) | Optional | Details to provide if `type` is **discover**.<br>For merchants operating in Japan, request [Diners](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-diners) payment method instead. Discover is automatically requested, together with Diners. |
| `eftDirectdebitCA` | [`GenericPmWithTdiUpdateInfo5 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-5.md) | Optional | Details to provide if `type` is **eft_directdebit_CA** (EFT PAD). |
| `eftposAustralia` | [`GenericPmWithTdiUpdateInfo6 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-6.md) | Optional | Details to provide if `type` is **eftpos_australia**. |
| `enabled` | `boolean \| undefined` | Optional | Indicates whether the payment method is enabled (**true**) or disabled (**false**). |
| `girocard` | [`GenericPmWithTdiUpdateInfo7 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-7.md) | Optional | Details to provide if `type` is **girocard**. |
| `ideal` | [`GenericPmWithTdiUpdateInfo8 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-8.md) | Optional | Details to provide if `type` is **ideal**. |
| `interacCard` | [`GenericPmWithTdiUpdateInfo9 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-9.md) | Optional | Details to provide if `type` is **interac_card**. |
| `jcb` | [`GenericPmWithTdiUpdateInfo10 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-10.md) | Optional | Details to provide if `type` is **jcb**.<br>For merchants operating in Japan, `midNumber`, `reuseMidNumber`, and `serviceLevel` fields are required.<br>For merchants operating outside of Japan, these fields are not required. |
| `maestro` | [`GenericPmWithTdiUpdateInfo11 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-11.md) | Optional | Details to provide if `type` is **maestro**.<br>In the US, `maestro` is not supported; use `maestro_usa` instead. |
| `maestroUsa` | [`GenericPmWithTdiUpdateInfo12 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-12.md) | Optional | Details to provide if `type` is **maestro_usa**.<br>Only for Maestro USA, otherwise use `maestro`. |
| `mc` | [`GenericPmWithTdiUpdateInfo13 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-13.md) | Optional | Details to provide if `type` is **mc**. |
| `nyce` | [`NyceUpdateInfo1 \| undefined`](../../doc/models/nyce-update-info-1.md) | Optional | Details to provide if `type` is **nyce**. |
| `paybybankPlaid` | [`PayByBankPlaidUpdateInfo1 \| undefined`](../../doc/models/pay-by-bank-plaid-update-info-1.md) | Optional | Details to provide if `type` is **paybybank_plaid**. |
| `pulse` | [`PulseUpdateInfo1 \| undefined`](../../doc/models/pulse-update-info-1.md) | Optional | Details to provide if `type` is **pulse**. |
| `sepadirectdebit` | [`SepaDirectDebitUpdateInfo1 \| undefined`](../../doc/models/sepa-direct-debit-update-info-1.md) | Optional | Details to provide if `type` is **sepadirectdebit**. |
| `star` | [`StarUpdateInfo1 \| undefined`](../../doc/models/star-update-info-1.md) | Optional | Details to provide if `type` is **star**. |
| `storeId` | `string \| undefined` | Optional | The store for this payment method |
| `storeIds` | `string[] \| undefined` | Optional | The list of stores for this payment method |
| `visa` | [`GenericPmWithTdiUpdateInfo14 \| undefined`](../../doc/models/generic-pm-with-tdi-update-info-14.md) | Optional | Details to provide if `type` is **visa**. |

## Example

```ts
import { Type8Enum, UpdatePaymentMethodInfo } from 'adyen';

const updatePaymentMethodInfo: UpdatePaymentMethodInfo = {
  accel: {
    transactionDescription: {
      doingBusinessAsName: 'doingBusinessAsName0',
      type: Type8Enum.Fixed,
    },
  },
  affirm: {
    pricePlan: 'pricePlan8',
  },
  bcmc: {
    transactionDescription: {
      doingBusinessAsName: 'doingBusinessAsName0',
      type: Type8Enum.Fixed,
    },
  },
  carnet: {
    transactionDescription: {
      doingBusinessAsName: 'doingBusinessAsName0',
      type: Type8Enum.Fixed,
    },
  },
  cartesBancaires: {
    transactionDescription: {
      doingBusinessAsName: 'doingBusinessAsName0',
      type: Type8Enum.Fixed,
    },
  },
};
```

