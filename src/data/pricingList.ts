import vector from '../assets/pricing_icons/vector.svg';

export interface IPrice {
  id: number;
  price: string;
  title_text: string;
  title_text2: string;
  columns: [
    {
      id: number;
      icon: string;
      text: string;
    },
    {
      id: number;
      icon: string;
      text: string;
    },
    {
      id: number;
      icon: string;
      text: string;
    },
    {
      id: number;
      icon: string;
      text: string;
    },
    {
      id: number;
      icon: string;
      text: string;
    },
    {
      id: number;
      icon: string;
      text: string;
    }
  ];
  actionButton: string;
}
export const priceList: IPrice[] = [
  {
    id: 1,
    price: '£29.99',
    title_text: 'Starter Plan',
    title_text2: 'Annual Subscription',
    columns: [
      {
        id: 1,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
      {
        id: 2,
        icon: vector,
        text: 'FREE copy of your title deeds ',
      },
      {
        id: 3,
        icon: vector,
        text: 'Full 24hr support package ',
      },
      {
        id: 4,
        icon: vector,
        text: 'Unlimited joint Guardians ',
      },
      {
        id: 5,
        icon: vector,
        text: 'Property valuation tracking  ',
      },
      {
        id: 6,
        icon: vector,
        text: 'Less than £2.50 per month ',
      },
    ],
    actionButton: 'Purchase',
  },
  {
    id: 2,
    price: '£29.99',
    title_text: 'Portfolio Plan',
    title_text2: 'Covers 5+ Properties',
    columns: [
      {
        id: 1,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
      {
        id: 2,
        icon: vector,
        text: 'Protects your Portfolio ',
      },
      {
        id: 3,
        icon: vector,
        text: 'FREE copy of your title deeds ',
      },
      {
        id: 4,
        icon: vector,
        text: 'Full 24hr support package ',
      },
      {
        id: 5,
        icon: vector,
        text: 'Unlimited joint Guardians ',
      },
      {
        id: 6,
        icon: vector,
        text: 'Property valuation tracking  ',
      },
    ],
    actionButton: 'Contact Us',
  },
  {
    id: 3,
    price: '£29.99',
    title_text: 'Lifetime Plan',
    title_text2: 'Homeowner life term Plan',
    columns: [
      {
        id: 1,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
      {
        id: 2,
        icon: vector,
        text: 'FREE copy of your title deeds ',
      },
      {
        id: 3,
        icon: vector,
        text: 'Full 24hr support package ',
      },
      {
        id: 4,
        icon: vector,
        text: 'Unlimited joint Guardians ',
      },
      {
        id: 5,
        icon: vector,
        text: 'Transfers when you move home ',
      },
      {
        id: 6,
        icon: vector,
        text: 'Property valuation tracking  ',
      },
    ],
    actionButton: 'Contact Us',
  },
];
