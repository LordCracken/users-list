import Card from '../UI/Card';

import { IUsersList } from '../../interfaces';
import classes from './UsersList.module.css';

const UsersList = ({ users }: IUsersList) => (
  <Card className={classes.users}>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age})
        </li>
      ))}
    </ul>
  </Card>
);

export default UsersList;
