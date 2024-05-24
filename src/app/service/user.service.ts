import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService} from "./config.service";
import { UserModel} from "../model/user.model";
import { firstValueFrom} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userUrl: string;

  constructor(private http: HttpClient, private configService : ConfigService) {
    this.userUrl = configService.apiConfiguration.baseUrl;
  }

  async getUser(id: String) {
    if (id) {
      return await this.getExistingUser(id);
    } else {
      return await this.getNewUser();
    }
  }

  getUserPaged(page: number) {
    return this.http.get<UserModel>(this.userUrl + '/pageable?page=' + page);
  }

  // async saveUser(user: UserModel) {
  //   try {
  //     if (user.id) {
  //       return await this.saveExistingUser(user);
  //     }else {
  //       return await this.saveNewUser(user);
  //     }
  //   }catch (err) {
  //     console.error(err);
  //   }
  // }

  private async getNewUser() {
    return Promise.reject({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      role: "",
      username: ""
    } as UserModel);
  }
  private async getExistingUser(id: String) {
    return await firstValueFrom(this.http.get<UserModel>
    (this.userUrl + '/' + id));
  }

  private async saveNewUser(user: UserModel) {
    return await firstValueFrom(this.http.post<UserModel>
    (this.userUrl, user));
  }
  private async saveExistingUser(user: UserModel) {
    return await firstValueFrom(this.http.patch<UserModel>
    (this.userUrl, user));
  }
}
