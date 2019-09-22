import { InjectedAccount } from './type';
import { Beneficiary } from '../redux/epics/beneficiariesEpic';
import { u128 } from '@polkadot/types';

export type State = {
    accounts: InjectedAccount[],
    mainAccount: InjectedAccount,
    balances: u128[],
    beneficiaries: Beneficiary[],
    condition: any,
    grantorBalances: u128[],
    grantor: string
};
