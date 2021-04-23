
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/docs',
  component: ComponentCreator('/docs','9de'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','9df'),
  exact: true,
},
{
  path: '/docs/3D-viewer',
  component: ComponentCreator('/docs/3D-viewer','8f5'),
  exact: true,
},
{
  path: '/docs/augmented-reality',
  component: ComponentCreator('/docs/augmented-reality','60b'),
  exact: true,
},
{
  path: '/docs/customizer-3D',
  component: ComponentCreator('/docs/customizer-3D','642'),
  exact: true,
},
{
  path: '/docs/example',
  component: ComponentCreator('/docs/example','abb'),
  exact: true,
},
{
  path: '/docs/integrations',
  component: ComponentCreator('/docs/integrations','690'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
