import {Contract} from 'ethers';
import {DomainType, WalletDomain} from 'src/store/walletDomains';
import {getENSProvider} from 'src/utils/marketsAndNetworksConfig';
import {tFetch} from 'src/utils/tFetch';

const provider = getENSProvider(59144);

const resolverAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_address',
        type: 'address',
      },
    ],
    name: 'getL2ReverseRecord',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const lookupAddress = async (address: string) => {
  const resolverStarPr = new Contract(
    '0xda4c3eb39707ad82ea7a31afd42bdf850fed8f41',
    resolverAbi,
    provider
  );

  try {
    return await resolverStarPr.getL2ReverseRecord(address);
  } catch (error) {
    console.error('error lookupAddress', error);
    if (error.code === 'CALL_EXCEPTION') {
      return null;
    }
    throw error;
  }
};

const getEnsName = async (address: string): Promise<string | null> => {
  try {
    const name = await lookupAddress(address);
    return name;
  } catch (error) {
    console.error('ENS name lookup error', error);
  }
  return null;
};

const getEnsAvatar = async (name: string): Promise<string | undefined> => {
  try {
    const image = `https://metadata.ens.domains/mainnet/avatar/${name}/`;
    await tFetch<never>(image, { method: 'HEAD' });
    return image;
  } catch (error) {
    console.error('ENS avatar lookup error', error);
  }
};

export const getEnsDomain = async (address: string): Promise<WalletDomain | null> => {
  const name = await getEnsName(address);
  if (!name) return null;
  const avatar = await getEnsAvatar(name);
  return { name, avatar, type: DomainType.ENS };
};
