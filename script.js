const menuIcon = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-button');

const mobileMenu = document.querySelector('header');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// const featuredTeams = [
//   {
//     image: 'assets/team/nrg.png',
//     name: 'NRG Esports',
//     region: '(North America)',
//     description:
//       'Benkeder studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
//   },
//   {
//     image: 'assets/team/vitality.jpg',
//     name: 'Team Vitality',
//     region: '(Europe)',
//     description:
//       'As the main venue for new media art production in Korea, Nabi promotes cross discoiplinary collaboration and understanding among science technology. humanities, and the arts.',
//   },
//   {
//     image: 'assets/team/spacestation.jpg',
//     name: 'Spacestation Gaming',
//     region: '(North America)',
//     description:
//       'Executive Director of the Wimimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely avaliable in 290 languages and used by nearly half a billion people around the world every month',
//   },
//   {
//     image: 'assets/team/bds.jpg',
//     name: 'BDS Esports',
//     region: '(Europe)',
//     description:
//       'Hepled bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012 he was inducted into the inaugural class of the inernet Societ',
//   },
//   {
//     image: 'assets/team/g2.png',
//     name: 'G2 Esports',
//     region: '(North America)',
//     description:
//       'Political democracy and paricipation of youth through online as her major condern',
//   },
//   {
//     image: 'assets/team/envy.jpg',
//     name: 'Team Envy',
//     region: '(North America)',
//     description:
//       'Leading open-source projects at the Mozilla Foundation such as the open source movement',
//   },
// ];

// const feturedCards = document.querySelector('.featured-cards');

// const mediaQuery = window.matchMedia('(min-width: 768px)');

// if (mediaQuery.matches) {
//   featuredTeams.forEach((speaker) => {
//     const container = document.createElement('article');
//     container.classList.add('card');

//     const imageHolder = document.createElement('div');
//     imageHolder.classList.add('featured-image-holder');
//     container.appendChild(imageHolder);

//     const image = document.createElement('img');
//     image.src = speaker.image;
//     image.alt = speaker.name;
//     imageHolder.appendChild(image);

//     const detail = document.createElement('div');
//     detail.classList.add('detail');
//     container.appendChild(detail);

//     const speakerName = document.createElement('h5');
//     speakerName.className = 'card-title';
//     speakerName.innerHTML = speaker.name;
//     detail.appendChild(speakerName);

//     const region = document.createElement('span');
//     region.className = 'card-text';
//     region.innerHTML = speaker.region;
//     detail.appendChild(region);

//     const description = document.createElement('p');
//     description.className = 'card-text';
//     description.innerHTML = speaker.description;
//     detail.appendChild(description);

//     feturedCards.appendChild(container);
//   });
// } else {
//   featuredTeams.slice(0, 2).forEach((speaker) => {
//     const container = document.createElement('article');
//     container.classList.add('card');

//     const imageHolder = document.createElement('div');
//     imageHolder.classList.add('fetured-image-holder');
//     container.appendChild(imageHolder);

//     const image = document.createElement('img');
//     image.src = speaker.image;
//     image.alt = speaker.name;
//     imageHolder.appendChild(image);

//     const detail = document.createElement('div');
//     detail.classList.add('detail');
//     container.appendChild(detail);

//     const speakerName = document.createElement('h5');
//     speakerName.className = 'card-title';
//     speakerName.innerHTML = speaker.name;
//     detail.appendChild(speakerName);

//     const region = document.createElement('span');
//     region.className = 'card-text';
//     region.innerHTML = speaker.region;
//     detail.appendChild(region);

//     const description = document.createElement('p');
//     description.className = 'card-text';
//     description.innerHTML = speaker.description;
//     detail.appendChild(description);

//     feturedCards.appendChild(container);
//   });
// }

// CREATING FEATURED SPEAKER SECTION DYNAMICALLY
// Select the speakers element using the class name
const speakers = document.querySelector('.featured-cards');

// Define an array of speaker details
const speakersDetails = [
  {
    id: 1,
    name: 'Pharm. Folashade Lawal',
    title: 'CEO, Victory Drugs Limited.',
    speakerImg: 'assets/team/bds.jpg',
    about:
      'Pharm. Folash Lawal is the CEO of Victory Drugs Limited. A leading community Pharmacy in FESTAC Town, Lagos',
  },
  {
    id: 2,
    name: 'Dr. Peter Bamkole',
    title: 'Physician, Hilton-Top Hospital Ikoyi, Lagos.',
    speakerImg: 'assets/team/envy.jpg',
    about:
      'Peter Bamkole, pioneered the Enterprise Development Centre (EDC) of the Pan-Atlantic University in January 2003, now one of the top enterprise development centers in Africa.',
  },
  {
    id: 3,
    name: 'Pharm. Bisi Bright',
    title: 'Consultant Clinical Pharmacist and Public Health Manager.',
    speakerImg: 'assets/team/g2.png',
    about:
      'Pharm. (Dr) Mrs. Bisi Bright is a Consultant Clinical Pharmacist and Public Health Manager. A fellow of both the Pharmaceutical Society of Nigeria and the West African Postgraduate College of Pharmacists (WAPCP), she also holds a Masters’ in Public Health.',
  },
  {
    id: 4,
    name: 'Chidi Okoro',
    title: 'Executive Consultant of Drug and Medicines.',
    speakerImg: 'assets/team/nrg.png',
    about:
      'Chidi Okoro teaches Strategy at Lagos Business School. He is currently the Founder/Executive Consultant of Drugs and Medicaments Nigeria Limited, a retail chain/own brands dealer in the Pharmaceutical sector.',
  },
  {
    id: 5,
    name: 'Abimbola Adebakin',
    title: 'CEO, Advantage Health Africa',
    speakerImg: 'assets/team/spacestation.jpg',
    about:
      'Abimbola is the Chief Executive Officer of Advantage Health Africa, an aggregator in the retail pharmacy space.',
  },
  {
    id: 6,
    name: 'Adedotun Sulaiman',
    title: 'Veteran Sports Journalist',
    speakerImg: 'assets/team/vitality.jpg',
    about:
      'Mr. Adedotun Sulaiman, MFR is a veteran Management and Strategy consultant, with over 25 years’ experience. He has been the head of 15 different companies and is the Executive Chairman of Arian Capital Limited.',
  },
];

// Define a function to generate a random speaker from the array
function randomSpeaker() {
  // Use the map function to create a new array of speaker details HTML elements
  const speakerDetailsHTML = speakersDetails.map(
    (speaker) => `
      <div class="speakers-details">
        <img src="${speaker.speakerImg}" alt="Speaker Image" />
        <div class="details">
          <h4>${speaker.name}</h4>
          <p class="title">${speaker.title}</p>
          <hr />
          <p class="position">${speaker.about}</p>
        </div>
      </div>
    `
  );

  // Use the join function to concatenate the array of HTML elements into a string
  const speakersHTML = speakerDetailsHTML.join('');

  // Set the innerHTML of the speakers element to the generated HTML string
  speakers.innerHTML = speakersHTML;
}

// Call the randomSpeaker function to generate a random speaker on page load
randomSpeaker();
