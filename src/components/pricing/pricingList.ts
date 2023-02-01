import vector from '../../assets/pricing_icons/vector.svg';
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
  footer: {
    id: number;
    text: string;
  };
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
        text: '24/7 activity monitoring ',
      },
      {
        id: 3,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
      {
        id: 4,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
      {
        id: 5,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
      {
        id: 6,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
    ],
    footer: { id: 1, text: 'Purchase' },
  },
  {
    id: 2,
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
        text: '24/7 activity monitoring ',
      },
      {
        id: 3,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
      {
        id: 4,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
      {
        id: 5,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
      {
        id: 6,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
    ],
    footer: { id: 2, text: 'Purchase' },
  },
  {
    id: 3,
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
        text: '24/7 activity monitoring ',
      },
      {
        id: 3,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
      {
        id: 4,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
      {
        id: 5,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
      {
        id: 6,
        icon: vector,
        text: '24/7 activity monitoring ',
      },
    ],
    footer: { id: 3, text: 'Purchase' },
  },
];
