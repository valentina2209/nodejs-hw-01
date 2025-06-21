import { readFile, writeFile } from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const removeLastContact = async () => {
  try {
    const data = await readFile(PATH_DB, "utf8");
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log("Контакти відсутні. Немає чого видаляти.");
      return;
    }

    contacts.pop();

    await writeFile(PATH_DB, JSON.stringify(contacts, null, 2), "utf8");
    console.log("Останній контакт видалено.");
  } catch (error) {
    console.error("Помилка при видаленні останнього контакту:", error.message);
  }
};

 removeLastContact();
