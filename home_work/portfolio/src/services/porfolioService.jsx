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