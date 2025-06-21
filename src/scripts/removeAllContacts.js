import { PATH_DB } from "../constants/contacts.js";
import {writeFile} from "node:fs/promises";

export const removeAllContacts = async () => {
    try {
        await writeFile(PATH_DB, JSON.stringify([],null,2), "utf-8");
        console.log('Файл успішно видалено.');
    } catch (error) {
         console.error('Помилка видалення файлу:', error.message);
    }
};

removeAllContacts();




