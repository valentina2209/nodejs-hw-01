import {readFile} from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";



export const getAllContacts = async () => {
    try{
        const data = await readFile(PATH_DB, "utf8");
        const contacts = JSON.parse(data);
        return contacts;
    } catch (error) {
        console.error('Помилка отримання списку файлів і каталогів:', error.message);
        return [];
    }
};

console.log(await getAllContacts());








