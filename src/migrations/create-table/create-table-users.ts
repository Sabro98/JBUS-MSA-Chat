import { Chats } from '../../models/chats';

console.log('create user table');

const create_table_users = async () => {
  await Chats.sync()
    .then(() => console.log('Success'))
    .catch((err) => console.log('Error', err));
};

create_table_users();
