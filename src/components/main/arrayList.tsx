import home from '../../assets/main_icons/home.svg';
import id_card from '../../assets/main_icons/id_card.svg';
import people from '../../assets/main_icons/people.svg';

export interface IList {
  id: number;
  image: string;
  title: string;
  text: string;
  number: string;
}
export const arrayList: IList[] = [
  {
    id: 1,
    image: home,
    title: 'Target Property',
    text: 'Fraudsters search land registry to find a home they want to target',
    number: '01',
  },
  {
    id: 2,
    image: id_card,
    title: 'Steal Identity ',
    text: 'Fraudsters commit identity theft to assume your identity',
    number: '02',
  },
  {
    id: 3,
    image: people,
    title: 'Execute Fraud',
    text: 'Fraudsters remortgage or sell your home leaving you homeless ',
    number: '03',
  },
];
