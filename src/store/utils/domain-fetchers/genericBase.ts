import { Contract } from 'ethers';
import { namehash } from 'ethers/lib/utils';
import { DomainType, WalletDomain } from 'src/store/walletDomains';
import { getENSProvider } from 'src/utils/marketsAndNetworksConfig';
import { tFetch } from 'src/utils/tFetch';

const provider = getENSProvider(8453);

const abi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'node',
        type: 'bytes32',
      },
    ],
    name: 'name',
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
  const resolverBase = new Contract('0xa92659104Eb42309Ae9482F1D1AE934B9Ee51dc3', abi, provider);

  const nodehash = namehash(address.substring(2) + '.addr.reverse');

  try {
    const n = await resolverBase.name(nodehash);
    return n;
  } catch (error) {
    console.error('lookupAddress error', error);
    if (error.code === 'CALL_EXCEPTION') {
      return null;
    }
    throw error;
  }
};

const getEnsName = async (address: string): Promise<string | null> => {
  try {
    return await lookupAddress(address);
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
