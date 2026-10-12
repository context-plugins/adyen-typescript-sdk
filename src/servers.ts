import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default1: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default2: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default3: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default4: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default5: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default6: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default7: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default8: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default9: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default10: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default11: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default12: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default13: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default14: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default15: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default16: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default17: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default18: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default19: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default20: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default21: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default22: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default23: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default24: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default25: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default26: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default27: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default28: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
};

const serverSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://checkout-test.adyen.com/v72")) },
  default1: { baseUrl: s.of(s.defaulted(s.string(), "https://pal-test.adyen.com/pal/servlet/Payment/v68")) },
  default2: {
    baseUrl: s.of(s.defaulted(s.string(), "https://pal-test.adyen.com/pal/servlet/Recurring/v68")),
  },
  default3: { baseUrl: s.of(s.defaulted(s.string(), "https://pal-test.adyen.com/pal/servlet/Payout/v68")) },
  default4: {
    baseUrl: s.of(s.defaulted(s.string(), "https://pal-test.adyen.com/pal/servlet/BinLookup/v54")),
  },
  default5: {
    baseUrl: s.of(s.defaulted(s.string(), "https://pal-test.adyen.com/pal/servlet/StoredValue/v46")),
  },
  default6: {
    baseUrl: s.of(s.defaulted(s.string(), "https://ca-test.adyen.com/ca/services/DataProtectionService/v1")),
  },
  default7: {
    baseUrl: s.of(s.defaulted(s.string(), "https://balanceplatform-api-test.adyen.com/fx/api/v1")),
  },
  default8: { baseUrl: s.of(s.defaulted(s.string(), "https://pal-test.adyen.com/pal/services/TestCard/v1")) },
  default9: { baseUrl: s.of(s.defaulted(s.string(), "https://management-test.adyen.com/v3")) },
  default10: { baseUrl: s.of(s.defaulted(s.string(), "https://cal-test.adyen.com/cal/services/Account/v6")) },
  default11: {
    baseUrl: s.of(s.defaulted(s.string(), "https://balance-control-test.adyen.com/balance-control/api/v2")),
  },
  default12: {
    baseUrl: s.of(s.defaulted(s.string(), "https://cal-test.adyen.com/cal/services/Notification/v6")),
  },
  default13: { baseUrl: s.of(s.defaulted(s.string(), "https://balanceplatform-api-test.adyen.com/bcl/v2")) },
  default14: { baseUrl: s.of(s.defaulted(s.string(), "https://balanceplatform-api-test.adyen.com/btl/v4")) },
  default15: {
    baseUrl: s.of(s.defaulted(s.string(), "https://balanceplatform-api-test.adyen.com/capital/v1")),
  },
  default16: { baseUrl: s.of(s.defaulted(s.string(), "https://cal-test.adyen.com/cal/services/Fund/v6")) },
  default17: { baseUrl: s.of(s.defaulted(s.string(), "https://test.adyen.com/authe/api/v1")) },
  default18: { baseUrl: s.of(s.defaulted(s.string(), "https://kyc-test.adyen.com/lem/v4")) },
  default19: { baseUrl: s.of(s.defaulted(s.string(), "https://cal-test.adyen.com/cal/services/Hop/v6")) },
  default20: {
    baseUrl: s.of(s.defaulted(s.string(), "https://balanceplatform-api-test.adyen.com/a2aissuer-api/v1")),
  },
  default21: { baseUrl: s.of(s.defaulted(s.string(), "https://obgateway-test.adyen.com/obgateway/v1")) },
  default22: {
    baseUrl: s.of(s.defaulted(s.string(), "https://ca-test.adyen.com/ca/services/DisputeService/v30")),
  },
  default23: {
    baseUrl: s.of(s.defaulted(s.string(), "https://balanceplatform-api-test.adyen.com/btl/api/v4")),
  },
  default24: { baseUrl: s.of(s.defaulted(s.string(), "https://device-api-test.adyen.com/v1")) },
  default25: {
    baseUrl: s.of(s.defaulted(s.string(), "https://softposconfig-test.adyen.com/softposconfig/v3")),
  },
  default26: { baseUrl: s.of(s.defaulted(s.string(), "https://management-test.adyen.com/v1")) },
  default27: {
    baseUrl: s.of(s.defaulted(s.string(), "https://checkout-test.adyen.com/checkout/possdk/v68")),
  },
  default28: {
    baseUrl: s.of(s.defaulted(s.string(), "https://postfmapi-test.adyen.com/postfmapi/terminal/v1")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    default1: resolveBaseUrl(default1Server(options)),
    default2: resolveBaseUrl(default2Server(options)),
    default3: resolveBaseUrl(default3Server(options)),
    default4: resolveBaseUrl(default4Server(options)),
    default5: resolveBaseUrl(default5Server(options)),
    default6: resolveBaseUrl(default6Server(options)),
    default7: resolveBaseUrl(default7Server(options)),
    default8: resolveBaseUrl(default8Server(options)),
    default9: resolveBaseUrl(default9Server(options)),
    default10: resolveBaseUrl(default10Server(options)),
    default11: resolveBaseUrl(default11Server(options)),
    default12: resolveBaseUrl(default12Server(options)),
    default13: resolveBaseUrl(default13Server(options)),
    default14: resolveBaseUrl(default14Server(options)),
    default15: resolveBaseUrl(default15Server(options)),
    default16: resolveBaseUrl(default16Server(options)),
    default17: resolveBaseUrl(default17Server(options)),
    default18: resolveBaseUrl(default18Server(options)),
    default19: resolveBaseUrl(default19Server(options)),
    default20: resolveBaseUrl(default20Server(options)),
    default21: resolveBaseUrl(default21Server(options)),
    default22: resolveBaseUrl(default22Server(options)),
    default23: resolveBaseUrl(default23Server(options)),
    default24: resolveBaseUrl(default24Server(options)),
    default25: resolveBaseUrl(default25Server(options)),
    default26: resolveBaseUrl(default26Server(options)),
    default27: resolveBaseUrl(default27Server(options)),
    default28: resolveBaseUrl(default28Server(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    default1: (subPath) => ({ baseUrl: base.default1, subPath }),
    default2: (subPath) => ({ baseUrl: base.default2, subPath }),
    default3: (subPath) => ({ baseUrl: base.default3, subPath }),
    default4: (subPath) => ({ baseUrl: base.default4, subPath }),
    default5: (subPath) => ({ baseUrl: base.default5, subPath }),
    default6: (subPath) => ({ baseUrl: base.default6, subPath }),
    default7: (subPath) => ({ baseUrl: base.default7, subPath }),
    default8: (subPath) => ({ baseUrl: base.default8, subPath }),
    default9: (subPath) => ({ baseUrl: base.default9, subPath }),
    default10: (subPath) => ({ baseUrl: base.default10, subPath }),
    default11: (subPath) => ({ baseUrl: base.default11, subPath }),
    default12: (subPath) => ({ baseUrl: base.default12, subPath }),
    default13: (subPath) => ({ baseUrl: base.default13, subPath }),
    default14: (subPath) => ({ baseUrl: base.default14, subPath }),
    default15: (subPath) => ({ baseUrl: base.default15, subPath }),
    default16: (subPath) => ({ baseUrl: base.default16, subPath }),
    default17: (subPath) => ({ baseUrl: base.default17, subPath }),
    default18: (subPath) => ({ baseUrl: base.default18, subPath }),
    default19: (subPath) => ({ baseUrl: base.default19, subPath }),
    default20: (subPath) => ({ baseUrl: base.default20, subPath }),
    default21: (subPath) => ({ baseUrl: base.default21, subPath }),
    default22: (subPath) => ({ baseUrl: base.default22, subPath }),
    default23: (subPath) => ({ baseUrl: base.default23, subPath }),
    default24: (subPath) => ({ baseUrl: base.default24, subPath }),
    default25: (subPath) => ({ baseUrl: base.default25, subPath }),
    default26: (subPath) => ({ baseUrl: base.default26, subPath }),
    default27: (subPath) => ({ baseUrl: base.default27, subPath }),
    default28: (subPath) => ({ baseUrl: base.default28, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
}

function default1Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default1.baseUrl.decode(options.serverOptions?.default1?.baseUrl) };
}

function default2Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default2.baseUrl.decode(options.serverOptions?.default2?.baseUrl) };
}

function default3Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default3.baseUrl.decode(options.serverOptions?.default3?.baseUrl) };
}

function default4Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default4.baseUrl.decode(options.serverOptions?.default4?.baseUrl) };
}

function default5Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default5.baseUrl.decode(options.serverOptions?.default5?.baseUrl) };
}

function default6Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default6.baseUrl.decode(options.serverOptions?.default6?.baseUrl) };
}

function default7Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default7.baseUrl.decode(options.serverOptions?.default7?.baseUrl) };
}

function default8Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default8.baseUrl.decode(options.serverOptions?.default8?.baseUrl) };
}

function default9Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default9.baseUrl.decode(options.serverOptions?.default9?.baseUrl) };
}

function default10Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default10.baseUrl.decode(options.serverOptions?.default10?.baseUrl) };
}

function default11Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default11.baseUrl.decode(options.serverOptions?.default11?.baseUrl) };
}

function default12Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default12.baseUrl.decode(options.serverOptions?.default12?.baseUrl) };
}

function default13Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default13.baseUrl.decode(options.serverOptions?.default13?.baseUrl) };
}

function default14Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default14.baseUrl.decode(options.serverOptions?.default14?.baseUrl) };
}

function default15Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default15.baseUrl.decode(options.serverOptions?.default15?.baseUrl) };
}

function default16Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default16.baseUrl.decode(options.serverOptions?.default16?.baseUrl) };
}

function default17Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default17.baseUrl.decode(options.serverOptions?.default17?.baseUrl) };
}

function default18Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default18.baseUrl.decode(options.serverOptions?.default18?.baseUrl) };
}

function default19Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default19.baseUrl.decode(options.serverOptions?.default19?.baseUrl) };
}

function default20Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default20.baseUrl.decode(options.serverOptions?.default20?.baseUrl) };
}

function default21Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default21.baseUrl.decode(options.serverOptions?.default21?.baseUrl) };
}

function default22Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default22.baseUrl.decode(options.serverOptions?.default22?.baseUrl) };
}

function default23Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default23.baseUrl.decode(options.serverOptions?.default23?.baseUrl) };
}

function default24Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default24.baseUrl.decode(options.serverOptions?.default24?.baseUrl) };
}

function default25Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default25.baseUrl.decode(options.serverOptions?.default25?.baseUrl) };
}

function default26Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default26.baseUrl.decode(options.serverOptions?.default26?.baseUrl) };
}

function default27Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default27.baseUrl.decode(options.serverOptions?.default27?.baseUrl) };
}

function default28Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default28.baseUrl.decode(options.serverOptions?.default28?.baseUrl) };
}
