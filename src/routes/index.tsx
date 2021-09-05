import { Switch } from 'react-router-dom';

import { HomePage } from 'pages/App/HomePage';
import { Users } from 'pages/App/Users';
import { Assets } from 'pages/App/Assets';
import { Units } from 'pages/App/Units';
import { Companies } from 'pages/App/Companies';
import { AssetsDetails } from 'pages/App/AssetsDetails';
import { UserDetails } from 'pages/App/UserDatails';
import { CompanyDetails } from 'pages/App/CompanyDetails';
import { UnityDetails } from 'pages/App/UnityDetails';
import { Route } from './Route';

export const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/home" component={HomePage} />
    <Route path="/usuarios" component={Users} />
    <Route path="/ativos" component={Assets} />
    <Route path="/empresas" component={Companies} />
    <Route path="/unidades" component={Units} />
    <Route path="/detalhes-do-ativo" component={AssetsDetails} />
    <Route path="/detalhes-do-usuario" component={UserDetails} />
    <Route path="/detalhes-da-empresa" component={CompanyDetails} />
    <Route path="/detalhes-da-unidade" component={UnityDetails} />
  </Switch>
);
