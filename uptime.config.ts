import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: 'eth0.bond 服务状态',
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'eth0-blog',
      name: '博客主站点',
      method: 'GET',
      target: 'https://eth0.bond',
      statusPageLink: 'https://eth0.bond',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'eth0-image',
      name: '图床',
      method: 'GET',
      target: 'https://img.eth0.bond',
      statusPageLink: 'https://img.eth0.bond',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'kindle-stats',
      name: 'Kindle 阅读统计',
      method: 'GET',
      target: 'https://kindle.eth0.bond',
      statusPageLink: 'https://kindle.eth0.bond',
      expectedCodes: [200, 401],
      timeout: 10000,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { pageConfig, workerConfig, maintenances }
