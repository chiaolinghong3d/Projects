const projectItems = [
  {
    name: 'Project Catwalk',
    description: 'Designed the front-end of an e-commerce web app for clothing',
    techstack: 'React, Node.js, HTML, CSS, Express, Axios',
    github_url: 'https://github.com/chiaolinghong3d/fec-catwalk',
    site_url: '',
    components: [
      {
        name: 'selection component',
        image_url: `${process.env.PUBLIC_URL}/img/projects/catwalk-selection.png`,
        bullet_points: [
          'Dynamically updates current selection on-click event using React state',
          'Allow user to add item into Outfit List by clicking the heart icon or the Add Outfit card',
        ]
      },
      {
        name: 'carousel component',
        image_url: `${process.env.PUBLIC_URL}/img/projects/catwalk-carousel.png`,
        bullet_points: [
          'Dynamically map out re-usable card component for each list from queried data',
          'Implemented the scrolling functionality using WEB API',
          'Implemented adding and deleting functionality for the card system, which is stored and updated in local storage',
        ]
      },
      {
        name: 'api endpoints',
        image_url: `${process.env.PUBLIC_URL}/img/projects/catwalk-api-endpoints.png`,
        bullet_points: [
          'Created router system using Express Router middleware to ensure modularity and clean collaborative environment',
          'Defined all the routes to each API endpoint and make the corresponsding HTTP requests',
        ]
      },
      {
        image_url: `${process.env.PUBLIC_URL}/img/projects/catwalk-dark-mode.png`,
        name: 'dark mode',
        bullet_points: [
          'Created dark mode state using React Context which is managed by a toggle button',
          'Designed the color scheme for both light and dark mode using Photoshop',
        ]
      },
    ],
  },
  {
    name: 'Buskr',
    description: 'Developed a mobile-first app as a platform for Buskers/Street Performers to post and share events to  attract venues',
    techstack: 'React, Javascript, Next.js, Webpack, HTML, CSS, Axios',
    github_url: '',
    site_url: '',
    components: [
      {
        name: 'calendar component',
        image_url: `${process.env.PUBLIC_URL}/img/projects/buskr-demo.gif`,
        bullet_points: [
          'Filtered queried data to dynamically render event indicators on dates based on user\'s search inputs', 'Used React state to re-render the Search Component when user clicks a different date on calendar', 'Created custom CSS for calendar libraries'
        ]
      },
      {
        name: 'google maps platform',
        image_url: `${process.env.PUBLIC_URL}/img/projects/map-component-and-sign-in-page.jpg`,
        bullet_points: [
          'Created custom CSS for Google Map to ensure style consistency',
        ]
      },
      {
        name: 'sign-in page',
        image_url: `${process.env.PUBLIC_URL}/img/projects/map-component-and-sign-in-page.jpg`,
        bullet_points: [
          'Created custom CSS for AWS Sign-in Page ensure style consistency',
        ]
      },
    ],
  },
]

export default projectItems;