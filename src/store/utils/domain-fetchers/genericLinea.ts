import { Contract } from 'ethers';
import { DomainType, WalletDomain } from 'src/store/walletDomains';
import { getENSProvider } from 'src/utils/marketsAndNetworksConfig';
import { tFetch } from 'src/utils/tFetch';

const provider = getENSProvider(59144);

const abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'primaryAddress',
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
  const resolverLinea = new Contract('0x7b9545c9bd7f850381e7913399668e5fc364b524', abi, provider);

  try {
    const n = await resolverLinea.primaryAddress(address);
    if (n !== '') return n + '.lin';
    else return n;
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
