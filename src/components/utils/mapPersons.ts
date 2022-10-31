import { PersonModel } from '../../model/PersonModel';
export const mapPersons = (persons: any[]): PersonModel[] => {
  const allPersons = [] as PersonModel[];

  if (!persons.length) {
    return allPersons;
  }

  return persons.map((person, i) => {
    return {
      pdfImage: person.pdfImage,
      emailImage: person.emailImage,
      descriptionImage: person.descriptionImage,
      zipCode: person.zipCode,
      createImage: person.createImage,
      arrowImage: person.arrowImage,
      arrowUpImage: person.arrowUpImage,
      name: person.name,
      progressStatus: person.progressStatus,
      accessDetails: person.accessDetails,
      accountNo: person.accountNo,
      image: person.image,
      date: person.date,
      coreAccess: person.coreAccess,
      dateText: person.dateText,
    } as PersonModel;
  });
};
