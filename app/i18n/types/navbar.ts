export interface NavbarType {
  home: string;
  ourTechnology: OurTechnology;
  coughCheckApp: CoughCheckApp;
  aboutUs: AboutUs;
  faq: string;
  donate: DonateSection;
}

export interface OurTechnology {
  section: string;
  howItWorks: string;
  OurResearch: string;
}

export interface CoughCheckApp {
  section: string;
  covid19: string;
  flu: string;
  copd: string;
  rsv: string;
}

export interface AboutUs {
  section: string;
  ourStory: string;
  advisors: string;
  ourSupporters: string;
  blog: string;
  oneYoungWorld: string;
}

interface DonateSection {
  buttonText: string;
  optionsTitle: string;
}
