
# Shareholder Contact

*This model accepts additional fields of type unknown.*

## Structure

`ShareholderContact`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`ViasAddress \| undefined`](../../doc/models/vias-address.md) | Optional | - |
| `email` | `string \| undefined` | Optional | The e-mail address of the person. |
| `fullPhoneNumber` | `string \| undefined` | Optional | The phone number of the person provided as a single string.  It will be handled as a landline phone.<br>Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344" |
| `jobTitle` | `string \| undefined` | Optional | Job title of the person. Required when the `shareholderType` is **Controller**.<br><br>Example values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**. |
| `name` | [`ViasName \| undefined`](../../doc/models/vias-name.md) | Optional | - |
| `personalData` | [`ViasPersonalData \| undefined`](../../doc/models/vias-personal-data.md) | Optional | - |
| `phoneNumber` | [`PhoneNumber3 \| undefined`](../../doc/models/phone-number-3.md) | Optional | - |
| `shareholderCode` | `string \| undefined` | Optional | The unique identifier (UUID) of the shareholder entry.<br><br>> **If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Shareholder will be created with a procedurally-generated UUID.**<br><br>> **If, during an Account Holder create request, a UUID is provided, the creation of Account Holder will fail with a validation Error..**<br><br>> **If, during an Account Holder update request, a UUID that is not correlated with an existing Shareholder is provided, the update of the Shareholder will fail.**<br><br>> **If, during an Account Holder update request, a UUID that is correlated with an existing Shareholder is provided, the existing Shareholder will be updated.** |
| `shareholderReference` | `string \| undefined` | Optional | Your reference for the shareholder entry. |
| `shareholderType` | [`ShareholderType \| undefined`](../../doc/models/shareholder-type.md) | Optional | - |
| `webAddress` | `string \| undefined` | Optional | The URL of the person's website. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Gender, ShareholderContact } from 'adyen';

const shareholderContact: ShareholderContact = {
  address: {
    country: 'country0',
    city: 'city6',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince4',
    street: 'street6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  email: 'email6',
  fullPhoneNumber: 'fullPhoneNumber4',
  jobTitle: 'jobTitle4',
  name: {
    firstName: 'firstName4',
    gender: Gender.Male,
    infix: 'infix4',
    lastName: 'lastName4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

