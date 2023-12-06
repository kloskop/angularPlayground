import { Component, OnInit } from '@angular/core';
import { UserRepositoryService } from '../repositories/user-repository.service';
import { IUserResponse } from '../interfaces/i-user-response';

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
}
