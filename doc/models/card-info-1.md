
# Card Info 1

Contains information about the card. Required when you create a payment instrument of `type` **card**.

*This model accepts additional fields of type unknown.*

## Structure

`CardInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authentication` | [`Authentication \| undefined`](../../doc/models/authentication.md) | Optional | - |
| `brand` | `string` | Required | The brand of the physical or the virtual card.<br>Possible values: **visa**, **mc**. |
| `brandVariant` | `string` | Required | The brand variant of the physical or the virtual card. For example, **visadebit** or **mcprepaid**.<br><br>> Reach out to your Adyen contact to get the values relevant for your integration. |
| `cardholderName` | `string` | Required | The name of the cardholder.<br>Maximum length: 26 characters.<br><br>**Constraints**: *Maximum Length*: `26` |
| `configuration` | [`CardConfiguration \| undefined`](../../doc/models/card-configuration.md) | Optional | - |
| `deliveryContact` | [`DeliveryContact \| undefined`](../../doc/models/delivery-contact.md) | Optional | - |
| `formFactor` | [`FormFactor1`](../../doc/models/form-factor-1.md) | Required | - |
| `threeDSecure` | `string \| undefined` | Optional | The 3DS configuration of the physical or the virtual card. Possible values: **fullySupported**, **secureCorporate**.<br><br>> Reach out to your Adyen contact to get the values relevant for your integration. |
| `usage` | `string \| undefined` | Optional | Specifies how many times the card can be used. Possible values: **singleUse**, **multiUse**.<br><br>> Reach out to your Adyen contact to determine the value relevant for your integration. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardInfo1, FormFactor1, PhoneType, Type4 } from 'adyenlib';

const cardInfo1: CardInfo1 = {
  brand: 'brand4',
  brandVariant: 'brandVariant2',
  cardholderName: 'cardholderName6',
  formFactor: FormFactor1.Physical,
  authentication: {
    email: 'email8',
    password: 'password2',
    phone: {
      number: 'number8',
      type: Type4.Landline,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  configuration: {
    configurationProfileId: 'configurationProfileId6',
    activation: 'activation2',
    activationUrl: 'activationUrl8',
    bulkAddress: {
      country: 'country0',
      city: 'city6',
      company: 'company6',
      email: 'email0',
      houseNumberOrName: 'houseNumberOrName4',
      line1: 'line18',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    cardImageId: 'cardImageId0',
    carrier: 'carrier8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  deliveryContact: {
    address: {
      country: 'country0',
      city: 'city6',
      line1: 'line18',
      line2: 'line20',
      line3: 'line38',
      postalCode: 'postalCode8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    name: {
      firstName: 'firstName4',
      lastName: 'lastName4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    company: 'company4',
    email: 'email0',
    fullPhoneNumber: 'fullPhoneNumber0',
    phoneNumber: {
      phoneCountryCode: 'phoneCountryCode8',
      phoneNumber: 'phoneNumber0',
      phoneType: PhoneType.Fax,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    webAddress: 'webAddress4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  threeDSecure: 'threeDSecure6',
  usage: 'usage8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

