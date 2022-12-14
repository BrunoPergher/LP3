import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { User } from '../models/Register';
const tableName = 'usersTable';

enablePromise(true);

export const getDBConnection = async () => {
    return openDatabase({ name: 'users-data.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase) => {
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        user TEXT NOT NULL, password TEXT NOT NULL
    );`;

    await db.executeSql(query);
};

export const getUser = async (db: SQLiteDatabase): Promise<User[]> => {
    try {
        const usersItems: User[] = [];
        const results = await db.executeSql(`SELECT * FROM ${tableName}`);
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                usersItems.push(result.rows.item(index))
            }
        });
        return usersItems;
    } catch (error) {
        console.error(error);
        throw Error('Erro ao encontrar user');
    }
};

export const LoginUser = async (db: SQLiteDatabase, userItem: User[]): Promise<boolean> => {
    try {
        const usersItems: User[] = [];
        const sql = `SELECT * FROM ${tableName} WHERE user = ` +
            userItem.map(i => `'${i.user}'`) + " AND password = " + userItem.map(i => `'${i.password}'`);

        let results = await db.executeSql(sql);

        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                usersItems.push(result.rows.item(index))
            }
        });

        if(usersItems.length >= 1){
            return true;
        }
        return false;
    } catch (error) {
        console.error(error);
        throw Error('Erro ao encontrar user');
    }
    return true;
};

export const saveUser = async (db: SQLiteDatabase, userItem: User[]) => {
    const insertQuery =
        `INSERT OR REPLACE INTO ${tableName}(user, password) values` +
        userItem.map(i => `('${i.user}', '${i.password}')`).join(',');

    return db.executeSql(insertQuery);
};

export const deleteDelete = async (db: SQLiteDatabase, id: number) => {
    const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
    await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
    const query = `drop table ${tableName}`;

    await db.executeSql(query);
};