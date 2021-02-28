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
                  buildHookId: '603bfc16b79b0de1126f9e12',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ash7cewd',
                  apiId: '157f97ea-b43b-471f-9900-a72730fbf6d9'
                },
                {
                  buildHookId: '603bfc16539ec863b1f848d2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r5f6ey75',
                  apiId: 'e0eea034-9337-4407-9da5-f927669eef9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Browns-jB/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r5f6ey75.netlify.app', category: 'apps'}
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
