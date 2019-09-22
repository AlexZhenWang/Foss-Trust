import React from 'react';
import 'antd/dist/antd.css';
import { Breadcrumb, Button } from 'antd';
import { InjectedAccount } from '../../types/type';
import Wrapper from '../../components/Wrapper/index';
import AccountPage from '../../components/account/AccountPage';
import { u128 } from '@polkadot/types';
import { Beneficiary } from '../../redux/epics/beneficiariesEpic';
import BN from 'bn.js';

type Props = {
  accounts: InjectedAccount[];
  mainAccount: InjectedAccount;
  balances: u128[];
  grantorBalances: u128[];
  beneficiaries: Beneficiary[];
  setMainAccount: (account: InjectedAccount) => void;
  location: any;
};

class BeneficiaryHomePage extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const {
      accounts,
      mainAccount,
      balances,
      setMainAccount,
      beneficiaries,
      location,
      grantorBalances
    } = this.props as Props;

    const totalWeight =
      beneficiaries &&
      beneficiaries.reduce(
        (acc, beneficiary) => acc.add(beneficiary.weight),
        new BN(0)
      );

    return (
      <Wrapper>
        <div>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Trust Fund</Breadcrumb.Item>
            <Breadcrumb.Item>Account</Breadcrumb.Item>
          </Breadcrumb>
          <AccountPage
            accounts={accounts}
            mainAccount={mainAccount}
            setMainAccount={setMainAccount}
          />
          {balances && (
            <div>
              <div>BTC: {balances[0] ? balances[0].toString() : 0}</div>
              <div>ETH: {balances[1] ? balances[1].toString() : 0}</div>
              <div>DAI: {balances[2] ? balances[2].toString() : 0}</div>
              <div>USTD: {balances[3] ? balances[3].toString() : 0}</div>
            </div>
          )}
          <br/>
          <br/>
          <div>Grantor balances</div>
          <div>
            BTC: {grantorBalances[0] ? grantorBalances[0].toString() : 0}
          </div>
          <div>
            ETH: {grantorBalances[1] ? grantorBalances[1].toString() : 0}
          </div>
          <div>
            DAI: {grantorBalances[2] ? grantorBalances[2].toString() : 0}
          </div>
          <div>
            USTD: {grantorBalances[3] ? grantorBalances[3].toString() : 0}
          </div>
          <br/>
          <br/>
          {beneficiaries &&
            beneficiaries.map(beneficiary => (
              <div>
                {beneficiary.address.toString()} :{' '}
                {beneficiary.weight
                  .muln(100)
                  .div(totalWeight)
                  .toString()}
                %
              </div>
            ))}
        </div>
      </Wrapper>
    );
  }
}

export default BeneficiaryHomePage;
