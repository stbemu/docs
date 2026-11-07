import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docSidebarId: [
      'intro', // Links to docs/intro.md
      {
        type: 'category',
        label: 'Getting Started',
        collapsible: true,
        collapsed: false,
        items: [
          'getting-started/installation', // Links to docs/getting-started/installation.md
          'getting-started/quickstart',
        ],
      },
      {
        type: 'category',
        label: 'Settings',
        collapsible: true,
        collapsed: false,
        link: {
          type: 'doc',
          "id": "settings/index"
        },
        items: [
          'settings/common-settings',
          'settings/key-maps',
          'settings/profiles',
          'settings/backup-restore',
          'settings/companion',
          'settings/about-updates',
        ],
      },
      {
        type: 'category',
        label: 'StbEmu Companion',
        collapsible: true,
        collapsed: true,
        link: {type: 'doc', id: 'stbemu-companion/index'},
        items: [
          'stbemu-companion/connecting-devices',
          'stbemu-companion/remote-control',
          'stbemu-companion/profiles',
          'stbemu-companion/transferring-profiles',
          'stbemu-companion/backups',
          'stbemu-companion/settings',
          'stbemu-companion/system-backup',
        ],
      },
      {
        type: 'doc',
        id: 'supported-devices',
        label: 'Supported devices'
      },
      {
        type: 'doc',
        id: 'download',
        label: 'Download'
      },
      {
        type: 'doc',
        id: 'faq',
        label: 'FAQ'
      }

    /*
      {
        type: 'link',
        label: 'External API Docs',
        href: 'https://api.example.com',
      }, */
    ],
};

export default sidebars;
