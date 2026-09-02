import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalSettingsResponse1Schema,
  type AdditionalSettingsResponse1,
} from "./additional-settings-response1.js";
import { communicationFormatSchema, type CommunicationFormat } from "./communication-format.js";
import { encryptionProtocolSchema, type EncryptionProtocol } from "./encryption-protocol.js";
import {
  filterMerchantAccountType1Schema,
  type FilterMerchantAccountType1,
} from "./filter-merchant-account-type1.js";
import { networkType2Schema, type NetworkType2 } from "./network-type2.js";
import { webhookLinks2Schema, type WebhookLinks2 } from "./webhook-links2.js";

export type Webhook = {
  links?: WebhookLinks2;
  acceptsExpiredCertificate?: boolean;
  acceptsSelfSignedCertificate?: boolean;
  acceptsUntrustedRootCertificate?: boolean;
  accountReference?: string;
  active: boolean;
  additionalSettings?: AdditionalSettingsResponse1;
  certificateAlias?: string;
  communicationFormat: CommunicationFormat;
  description?: string;
  encryptionProtocol?: EncryptionProtocol;
  filterMerchantAccountType?: FilterMerchantAccountType1;
  filterMerchantAccounts?: string[];
  hasError?: boolean;
  hasPassword?: boolean;
  hmacKeyCheckValue?: string;
  id?: string;
  networkType?: NetworkType2;
  populateSoapActionHeader?: boolean;
  type: string;
  url: string;
  username?: string;
};

export const webhookSchema: Schema<Webhook> = s.object<Webhook>({
  links: s.optional(s.lazy(() => webhookLinks2Schema)),
  acceptsExpiredCertificate: s.optional(s.boolean()),
  acceptsSelfSignedCertificate: s.optional(s.boolean()),
  acceptsUntrustedRootCertificate: s.optional(s.boolean()),
  accountReference: s.optional(s.string()),
  active: s.boolean(),
  additionalSettings: s.optional(s.lazy(() => additionalSettingsResponse1Schema)),
  certificateAlias: s.optional(s.string()),
  communicationFormat: communicationFormatSchema,
  description: s.optional(s.string()),
  encryptionProtocol: s.optional(s.lazy(() => encryptionProtocolSchema)),
  filterMerchantAccountType: s.optional(s.lazy(() => filterMerchantAccountType1Schema)),
  filterMerchantAccounts: s.optional(s.array(s.string())),
  hasError: s.optional(s.boolean()),
  hasPassword: s.optional(s.boolean()),
  hmacKeyCheckValue: s.optional(s.string()),
  id: s.optional(s.string()),
  networkType: s.optional(s.lazy(() => networkType2Schema)),
  populateSoapActionHeader: s.optional(s.boolean()),
  type: s.string(),
  url: s.string(),
  username: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
