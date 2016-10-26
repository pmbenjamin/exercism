export class HelloWorld {

  public name: string

  constructor() {
  }

  public hello(name?: string) {
    if (name) {
      return `Hello, ${name}!` 
    } else {
      return `Hello, World!` 
    }
  }

}
