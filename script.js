const menuIcon = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-button');

const mobileMenu = document.querySelector('header');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

const speakers = document.querySelector('.featured-cards');

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

function randomSpeaker() {
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
    `,
  );

  const speakersHTML = speakerDetailsHTML.join('');

  speakers.innerHTML = speakersHTML;
}

randomSpeaker();
