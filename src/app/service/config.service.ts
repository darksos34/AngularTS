import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiConfigurtion} from "../model/api-configuration.model";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiConfiguration: ApiConfigurtion = {baseUrl: "changme"
}

  constructor(private http: HttpClient) {
  }

  public async loadConfiguration(): Promise<Promise<ApiConfigurtion> | null> {
    return firstValueFrom(this.http.get('/assets/config.json'))
      .then((configuration: any) => {
        this.apiConfiguration = configuration as ApiConfigurtion;
        return configuration;
      })
      .catch((error) => {
        console.error('Error loading configuration', error);
        return null;
      });
  }
}
