'use strict'

module.exports = {
  npm: {
    scenario: 'npm',
    legend: 'npm',
    name: 'npm',
    args: [
      'install',
      '--ignore-scripts',
      '--legacy-peer-deps',
      '--cache',
      'cache',
    ]
  },
  pnpm: {
    scenario: 'pnpm',
    legend: 'pnpm',
    name: 'pnpm',
    args: [
      'install',
      '--ignore-scripts',
      '--store-dir',
      `cache`,
    ]
  },
  yarn: {
    scenario: 'yarn',
    legend: 'Yarn',
    name: 'yarn',
    args: [
      '--ignore-scripts',
      '--cache-folder',
      'cache'
    ]
  },
  yarn_pnp: {
    scenario: 'yarn_pnp',
    legend: "Yarn PnP",
    name: 'yarn',
    args: [
      '--pnp',
      '--ignore-scripts',
      '--cache-folder',
      'cache'
    ]
  },
  bun: {
    scenario: 'bun',
    legend: 'bun',
    name: 'bun',
    args: [
      'install',
      '--ignore-scripts',
      '--cache',
      'cache',
    ]
  }
}
