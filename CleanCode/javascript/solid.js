/**
 *
 * 규칙.1
 * 단일 책임 원칙
 * - 클래스를 수정 할 때는 수정해야 하는 이유가 2개 이상 있으면 안됨.
 */

// 안 좋은 예
class UserSettings {
  constructor(user) {
    this.user = user;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
    }
  }

  verifyCredentials() {}
}
