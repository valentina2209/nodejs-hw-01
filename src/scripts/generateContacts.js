import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();

    const newContacts = Array.from({ length: count }, () => createFakeContact());

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`${count} контактів успішно додано. Загальна кількість: ${updatedContacts.length}`);
  } catch (error) {
    console.error('Помилка під час генерації контактів:', error.message);
  }
};


const [, , arg] = process.argv;
const count = Number(arg) || 5;

generateContacts(5);
