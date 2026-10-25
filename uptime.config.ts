import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: 'eth0.bond Status',
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'eth0-blog',
      name: 'Blog',
      method: 'GET',
      target: 'https://eth0.bond',
      statusPageLink: 'https://eth0.bond',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'eth0-image',
      name: 'Image Hosting',
      method: 'GET',
      target: 'https://img.eth0.bond',
      statusPageLink: 'https://img.eth0.bond',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'kindle-stats',
      name: 'Kindle Reading Stats',
      method: 'GET',
      target: 'https://kindle.eth0.bond',
      statusPageLink: 'https://kindle.eth0.bond',
      expectedCodes: [200, 401],
      timeout: 10000,
    },
    {
      id: 'sso-login',
      name: 'SSO',
      method: 'GET',
      target: 'https://sso.eth0.bond',
      statusPageLink: 'https://sso.eth0.bond',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { pageConfig, workerConfig, maintenances }
