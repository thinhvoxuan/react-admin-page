import { observable } from 'mobx';

class AuthStore {

  @observable me;

  constructor() {
    this.me = null;
  }

}

const userStore = new AuthStore();

export default userStore;
// export that for unit test
export { AuthStore };
