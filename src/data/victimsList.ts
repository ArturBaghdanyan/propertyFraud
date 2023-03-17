import family from '../assets/victims_image/family.png';
import home from '../assets/victims_image/home.png';
import model from '../assets/victims_image/model.png';
import person from '../assets/victims_image/person.png';
export interface IList {
  id: number;
  image: string;
  title: string;
  text: string;
}
export const list: IList[] = [
  {
    id: 1,
    image: family,
    title: 'Real Victims of Fraud Watch our video',
    text: 'Title & property fraud is a growing risk to homeowners and landlords. This short video was designed to create awareness of how serious and real the issue is. We also highlight how simple these frauds were conducted. The devastation to homeowners affected by title fraud cannot be underestimated as this short video will demonstrate.',
  },
  {
    id: 2,
    image: home,
    title: 'Luton clergyman loses his home',
    text: 'Reverend Mike Hall told the BBC how his house had been sold without his knowledge via identity theft. He was away at the time and alerted by neighbours that someone was inside the property. Reverend Mike Hall subsequently attended the property to find the new owners renovating his property. ',
  },
  {
    id: 3,
    image: person,
    title: 'Candy brothers fall for pensioners’ £6m sting',
    text: 'The Candy brothers, two of London’s best known luxury property developers, were swindled by four pensioners who sold them a 47-acre Berkshire estate that they did not own. The brothers have emerged as the victims of an audacious quartet of fraudsters in their sixties and early seventies who were jailed for their part in the scam.',
  },
  {
    id: 4,
    image: model,
    title: 'A Model £1.2m Fraud',
    text: 'A model and her mother who rented a high value property in Kensington have been jailed after the mother brazenly impersonated the identity of the property owner, a deceased Kensington landlady to defraud more than £1.2m from a lender who advanced funds to remortgage the property.',
  },
];
