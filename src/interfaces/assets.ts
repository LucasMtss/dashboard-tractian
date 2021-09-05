interface ISpecifications {
  maxTemp?: number;
  power?: number;
  rpm?: number;
}

interface IMetrics {
  totalCollectsUptime: number;
  totalUptime: number;
  lastUptimeAt: string;
}

export interface IAssets {
  id: number;
  status: 'inAlert' | 'inOperation' | 'inDowntime';
  sensors: Array<string>;
  model: string;
  healthscore: number;
  name: string;
  image: string;
  specifications: ISpecifications;
  metrics: IMetrics;
  unitId: number;
  companyId: number;
}
