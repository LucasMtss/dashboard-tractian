import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { IAssets } from 'interfaces/assets';
import api from 'services/api';
import { useToast } from 'hooks/toast';

import { Chart, Container } from './styles';

export function HomePage(): JSX.Element {
  const [assets, setAssets] = useState<Array<IAssets>>([] as Array<IAssets>);
  const { addError } = useToast();

  useEffect(() => {
    async function getAssets() {
      try {
        const response = await api.get('assets');
        if (response.data) setAssets(response.data);
      } catch (error) {
        addError('Erro ao carregar ativos');
      }
    }
    getAssets();
  }, [addError]);

  const options = {
    title: {
      text: 'Saúde dos ativos',
    },
    xAxis: {
      categories: assets.map(obj => obj.name),
    },
    series: [
      {
        data: assets.map(obj => obj.healthscore),
      },
    ],
  };
  return (
    <Container>
      <Chart>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Chart>
    </Container>
  );
}
