import * as ens from './ens';
import * as genericBase from './genericBase';
import * as genericLinea from './genericLinea';
import * as starprotocol from './starprotocol';

export const domainFetchers = [
  genericBase.getEnsDomain,
  genericLinea.getEnsDomain,
  starprotocol.getEnsDomain,
  ens.getEnsDomain,
];
