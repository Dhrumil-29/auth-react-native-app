import {Client, Account, ID} from 'appwrite';
import Config from 'react-native-config';
import Snackbar from 'react-native-snackbar';

const appwriteClient = new Client();

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

class AppwriteService {
  account;

  constructor() {
    appwriteClient
      .setEndpoint(Config.APPWRITE_API_ENDPOINT!)
      .setProject(Config.APPWRITE_PROJECT_ID!);

    this.account = new Account(appwriteClient);
  }

  // create new record
  async createAccount({email, password, name}: CreateUserAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );

      if (userAccount) return this.login({email, password});

      return userAccount;
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite service :: createAccount ', error);
    }
  }
  // login
  async login({email, password}: LoginUserAccount) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite service :: login ', error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite service :: getCurrentUser ', error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession('current');
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite service :: logout ', error);
    }
  }
}

export default AppwriteService;
