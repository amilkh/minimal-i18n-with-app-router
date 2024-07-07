import {
  FingerSnapIcon,
  GlobeIcon,
  HeartRhythmIcon,
  LoopIcon,
  PhoneInHandIcon,
  TeamIcon,
} from '@/app/assets/images/ourStory';
import { OurStory } from '../types/ourStory';

const ourStory: OurStory = {
  aboutUsSection: {
    title: 'About Us',
    texts: [
      'Our innovative approach aims to offer superior COVID pre-screening for patients, clinicians and governments, especially in low-income countries.',
      'We aspire to be the leading nonprofit organization for technology - enabled disease identification, transforming global healthcare and inspiring others to support and invest in this mission with us.',
    ],
  },
  storySection: {
    title: 'Story',
    texts: [
      [
        {
          type: 'text',
          text: 'When the pandemic hit, ',
        },
        {
          type: 'link',
          url: '/',
          text: 'Virufy’s founder, Amil Khanzada',
        },
        {
          type: 'text',
          text: ', knew smartphones were omnipresent and that COVID impacted the nose, throat, and lungs.',
        },
      ],
      [
        {
          type: 'text',
          text: 'He hypothesized that breathing and cough sounds could be analyzed with machine learning to detect COVID patterns.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Wanting to make a positive impact, he orchestrated a clinical study with 362 patients in an esteemed university hospital. The original team of Virufy, beginning with Stanford graduate AI students, expanded to volunteers from universities globally.',
        },
      ],
    ],
  },
  valuesSection: {
    title: 'Values',
    cards: [
      {
        title: 'Transformation',
        image: LoopIcon,
        imageText: 'loop icon',
        text: 'We aim to transform expensive healthcare systems by using technology to drive necessary changes.',
      },
      {
        title: 'Collaboration',
        image: GlobeIcon,
        imageText: 'globe icon',
        text: 'We commit to making rapid disease detection available to every person in the world, regardless of background.',
      },
      {
        title: 'Health',
        image: HeartRhythmIcon,
        imageText: 'heart rhythm icon',
        text: 'We commit to always putting the health and well-being of all people across the globe first and foremost.',
      },
      {
        title: 'Affordability',
        image: TeamIcon,
        imageText: 'group of people icon',
        text: 'We aim to use technology to make disease prevention and detection free for all people around the world.',
      },
      {
        title: 'Efficiency',
        image: FingerSnapIcon,
        imageText: 'finger snapping icon',
        text: 'We commit to creating intuitive technology that delivers rapid detection, stopping virus spread and saving lives.',
      },
      {
        title: 'Innovation',
        image: PhoneInHandIcon,
        imageText: 'phone in hand icon',
        text: 'We aim to ensure rapid detection of diseases with just one tap on a mobile device.',
      },
    ],
  },
  privacySection: {
    title: 'Our Commitment to Privacy',
    texts: [
      'Virufy takes the privacy and protection of your personal information seriously. Our legal team has prepared a detailed Privacy Policy and Cookie Policy to protect the personal information you share with us through use of our website.',
    ],
  },
};

export default ourStory;
