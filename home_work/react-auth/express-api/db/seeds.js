const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const Student = require("../models/student");

const { dbURI } = require("../config/environment");

mongoose.connect(dbURI);

Student.collection.drop();

Student.create([
    {
        name: 'Adrian Welch',
        nameImg: 'Adrian Welch',
        linkedIn: 'https://www.linkedin.com/in/',
        gitHub: 'https://github.com/adrianwelch',
        mostLikelyTo: 'Inherit a grape juice estate.'
      }, {
        name: 'Alice Marshall',
        nameImg: 'Alice Marshall',
        linkedIn: 'https://www.linkedin.com/in/alice-marshall-1596419b',
        gitHub: 'https://github.com/AliceMarshall',
        mostLikelyTo: 'Climb Everest without equipment.'
      }, {
        name: 'Arrianne O Shea',
        nameImg: 'Arrianne O Shea',
        linkedIn: 'https://www.linkedin.com/in/arrianne-o-shea-86536118',
        gitHub: 'https://github.com/',
        mostLikelyTo: 'Organise a flash dance.'
      }, {
        name: 'Ben Currie',
        nameImg: 'Ben Currie',
        linkedIn: 'https://www.linkedin.com/in/ben-currie-b31953137',
        gitHub: 'https://github.com/123THC',
        mostLikelyTo: 'Sell GA their building back to them for a YUGE profit.'
      }, {
        name: 'Buki Thompson',
        nameImg: 'Buki Thompson',
        linkedIn: 'https://www.linkedin.com/in/bukalothompson',
        gitHub: 'https://github.com/bukixo',
        mostLikelyTo: 'Be upset that the anime dream she had was just a dream.'
      }, {
        name: 'Conor Heena',
        nameImg: 'Conor Heena',
        linkedIn: 'https://www.linkedin.com/in/conorheena',
        gitHub: 'https://github.com/heenslice',
        mostLikelyTo: 'Not teach maths.'
      }, {
        name: 'Fabricio Ferreria',
        nameImg: 'Fabricio Ferreria',
        linkedIn: 'https://www.linkedin.com/in/',
        gitHub: 'https://github.com/Ef-Eff',
        mostLikelyTo: 'Create an e-commerce platform selling solely onesies.'
      }, {
        name: 'Giacomo Brunetti',
        nameImg: 'Giacomo Brunetti',
        linkedIn: 'https://www.linkedin.com/in/',
        gitHub: 'https://github.com/GiacomoBrunetti',
        mostLikelyTo: 'Never impart his hair secrets.'
      }, {
        name: 'Gianmaria Carrodano',
        nameImg: 'Gianmaria Carrodano',
        linkedIn: 'https://www.linkedin.com/in/',
        gitHub: 'https://github.com/',
        mostLikelyTo: 'Secretly be able to lift car over his head.'
      }, {
        name: 'Gurvinder Singh',
        nameImg: 'Gurvinder Singh',
        linkedIn: 'https://www.linkedin.com/in/gurvindersinghsandhu',
        gitHub: 'https://github.com/1Guv',
        mostLikelyTo: 'Be a secret billionaire.'
      }, {
        name: 'Hannah Wynn Jones',
        nameImg: 'Hannah Wynn Jones',
        linkedIn: 'https://www.linkedin.com/in/hannah-wynn-jones-21950785',
        gitHub: 'https://github.com/hannahwynnones',
        mostLikelyTo: 'Organise a bake sale with animals as waiters.'
      }, {
        name: 'Huw Fernie',
        nameImg: 'Huw Fernie',
        linkedIn: 'https://www.linkedin.com/in/',
        gitHub: 'https://github.com/',
        mostLikelyTo: 'Sail to the moon.'
      }, {
        name: 'Jake Adams',
        nameImg: 'Jake Adams',
        linkedIn: 'https://www.linkedin.com/in/jake-adams-16b92476',
        gitHub: 'https://github.com/jakeadamsiii',
        mostLikelyTo: 'Catch all three legendary dogs, in like, one casj walk.'
      }, {
        name: 'Krisztian Groz',
        nameImg: 'Krisztian Groz',
        linkedIn: 'https://www.linkedin.com/in/krisztián-gróz-0a78a0105',
        gitHub: 'https://github.com/KrisztianGroz',
        mostLikelyTo: `Talk endlessly about martial arts that I've never heard of.`
      }, {
        name: 'Mark Davis',
        nameImg: 'Mark Davis',
        linkedIn: 'https://www.linkedin.com/in/markjdvs',
        gitHub: 'https://github.com/mrkjdvs',
        mostLikelyTo: 'Teach maths.'
      }, {
        name: 'Mark Sherrington',
        nameImg: 'Mark Sherrington',
        linkedIn: 'https://www.linkedin.com/in/mark-sherrington',
        gitHub: 'https://github.com/msherrington',
        mostLikelyTo: 'Avoid Trello like the plague.'
      }, {
        name: 'Muge Ersoz',
        nameImg: 'Muge Ersoz',
        linkedIn: 'https://www.linkedin.com/in/mugeersoz',
        gitHub: 'https://github.com/mersoz',
        mostLikelyTo: 'Make an app that says good morning in the most pleasant way.'
      }, {
        name: 'Olivia Vaughan-Fowler',
        nameImg: 'Olivia Vaughan-Fowler',
        linkedIn: 'https://www.linkedin.com/in/',
        gitHub: 'https://github.com/',
        mostLikelyTo: 'Moonlight as a masked lead singer.'
      }, {
        name: 'Omar Harvey-Phillips',
        nameImg: 'Omar Harvey-Phillips',
        linkedIn: 'https://www.linkedin.com/in/omarhphillips',
        gitHub: 'https://github.com/omaotzu',
        mostLikelyTo: 'Smash the weekend and then write OmarScript on the Monday.'
      }, {
        name: 'Raiden Dilan',
        nameImg: 'Raiden Dilan',
        linkedIn: 'https://www.linkedin.com/in/',
        gitHub: 'https://github.com/RaidenDilan',
        mostLikelyTo: 'Tell a bad joke, badly.'
      }, {
        name: 'Roman Stankiewicz',
        nameImg: 'Roman Stankiewicz',
        linkedIn: 'https://www.linkedin.com/in/roman-stankiewicz-b94a5368',
        gitHub: 'https://github.com/romanstan',
        mostLikelyTo: 'Talk his way into a TD job right after finishing WDI.'
      }, {
        name: 'Sam Domesjo',
        nameImg: 'Sam Domesjo',
        linkedIn: 'https://www.linkedin.com/in/sam-domesjö-11032b137',
        gitHub: 'https://github.com/domesjo',
        mostLikelyTo: 'Do a layup in a job interview.'
      }, {
        name: 'Sam Wakefield',
        nameImg: 'Sam Wakefield',
        linkedIn: 'https://www.linkedin.com/in/samwakefield',
        gitHub: 'https://github.com/samsw69',
        mostLikelyTo: 'Coerce interviewers into selling her the company for peanuts.'
      }, {
        name: 'Sarah Miller',
        nameImg: 'Sarah Miller',
        linkedIn: 'https://www.linkedin.com/in/sarah-miller-3023249',
        gitHub: 'https://github.com/sarahlikeshiny',
        mostLikelyTo: 'Code a new technological app that destroys the oil industry.'
      }, {
        name: 'Thomas Allen',
        nameImg: 'Thomas Allen',
        linkedIn: 'https://www.linkedin.com/in/thomas-allen-96600276',
        gitHub: 'https://github.com/tjallen27',
        mostLikelyTo: 'Get a job purely on his shirt under sweater game.'
      }, {
        name: 'Valerio Risuleo',
        nameImg: 'Valerio Risuleo',
        linkedIn: 'https://www.linkedin.com/in/valeri-risuleo',
        gitHub: 'https://github.com/valeriorisuleo',
        mostLikelyTo: 'Redesign the world.'
      }
])
    .then(students => console.log(`${students.length} students created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
