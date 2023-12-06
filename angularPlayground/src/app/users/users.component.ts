import { Component, OnInit } from '@angular/core';
import { UserRepositoryService } from '../repositories/user-repository.service';
import { IUserResponse } from '../interfaces/i-user-response';
import { IUser } from '../interfaces/i-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersResponse: IUserResponse | undefined;

  constructor(public usersRepository: UserRepositoryService) {}

  ngOnInit(): void {
    this.usersRepository.getUsers().then((resp) => {
      this.usersResponse = resp;
    });
  }


  public checkIfUserShouldBeHighlighted(user: IUser): boolean {
    let result = false;

    if (user.id % 2 > 0 && user.first_name !== 'George') {
      result = true;
    } else if (user.first_name.toLowerCase() === 'tracey') {
      result = true;
    } else if (user.email.includes('holt')) {
      result = true;
    }

    return result;
  }
}
