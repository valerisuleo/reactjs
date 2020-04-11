const projects = [
    {
        title: 'Steal My Deck',
        body: 'A deck of Italian cards consist of 40 cards (hand-crafted by your favourite designer for you!) divided into four suits. Neapolitan, Piacentine, Triestine and Sicilian cards are divided into Coppe (Cups), Ori or Denari (Golds or Coins), Spade (Swords) and Bastoni (Clubs).',
        path: ''
    },
    {
        title: 'Who Let The Dogs Out ?',
        body: 'A RESTful app which allows dogs owners to find the nearest park for their best friends and get all the info that they need to know about what kind of dogs usually frequent that park.',
        path: ''
    },
    {
        title: 'SpeakEasy',
        body: 'An App that allows users to meet up and exchange skills and languages. This is a full stack app with full CRUD functionality as well as user authentication. It was built as a team of four where we adopted agile as framework.',
        path: ''
    },
    {
        title: 'MTv Cribs',
        body: "A fully working RESTful App I have build an Express API for the back-end and I've consumed the data with AngularJs. Once I have built out the API, I've test it with insomnia. I used ng-class to apply classes to elements to change their styling under specific circumstances, created a custom carousel with CSS keyframes and I added frontend form validation with ngMessages.",
        path: ''
    },
    {
        title: 'iTunes Artwork',
        body: 'This is a RESTful App with 2 referenced models and css and jQuery animation. Only logged in users can create a new resource and can edit or delete it. The user who created the resource is stored inside the resource as a reference and only him is able to see the edit or delete buttons. When a resouce is displayed on the page, the username of the user who created the post is printed out',
        path: ''
    },
    {
        title: 'Dark Skies',
        body: "An WebApp that consumes a public API: Dark Skies. I started by having a look at the documentation and testing some of the API's endpoints with insomnia. I made a proxy request to a public API using request-promise and I've consumed the data with an Angular App.",
        path: ''
    },

]

export function getProjects() {
    projects.forEach((item) => {
        item.path = `${item.title.replace(/\s/g,'').toLowerCase()}`
        if (item.path.includes('?')) {
            item.path = item.path.replace('?', '');
        }
        
    })
    return projects;
}