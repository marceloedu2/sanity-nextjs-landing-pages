export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eda447d1632958366b091a0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3vuuthf7',
                  apiId: '0e20e854-4123-4548-8ec1-b58d981e111f'
                },
                {
                  buildHookId: '5eda447d3a487cde401d89c5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-64vvj3x5',
                  apiId: 'b881a85d-ebfa-4c44-bfcb-5acbfb921edd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marceloedu2/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-64vvj3x5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
