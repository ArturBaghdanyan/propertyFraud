import AppStore from '../assets/footer_icons/appstore.svg';
import googlePay from '../assets/footer_icons/googlepay.svg';

export interface IFooter {
  id: number;
  title: string;
  list: string[];
  text_1?: string;
  text_2?: string;
}

export const footerlist: IFooter[] = [
  {
    id: 1,
    title: 'Company',
    list: ['About', 'Careers', 'Press'],
    text_1: 'Blog',
    text_2: 'Partnerships',
  },
  {
    id: 2,
    title: 'Useful Links',
    list: ['FAQ’s', 'Contact Us', 'How it Works'],
  },
  {
    id: 3,
    title: 'Legacy',
    list: ['Privacy', 'Terms', 'Cookies'],
  },
];

export const mobileAppUrl = {
  title: 'Mobile',
  appStoreIcon: AppStore,
  gpIcon: googlePay,
};
