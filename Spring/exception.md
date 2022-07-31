## Java 예외처리 방법

### 하지말아야할 예외처리 방식

1. 예외에 대응이 없이 진행되는 코드

```
try {
    ...
} catch(Exception e) {
}   <-- 예외처리에 대한 대응이 없기에 무시하고 소스코드를 진행하기에 시스템 오류, 결과의 원인을 찾기 힘듬
```

2. 무책임한 throws

- 컴파일 에러를 피하기 위해서 무분별한 throws를 사용
- throws Exception을 모든 메소드에 기계적으로 넣은것도 지양
- 적절한 예외상황 처리가 필요

### 예외의 종류

- 크게 Error, Exception 2가지로 나눌 수 있음.
- 그 중, Exception은 예외를 반드시 체크해야하는지의 여부에 따라 CheckedException, UncheckedException 으로 구분가능

1. Error

- 시스템에 비정상적인 상황이 발생했을 경우 사용
- 주로 자바 VM에서 발생시키는 것이고, 어플리케이션 코드에서 잡으려고 하면 안됨.
- OutOfMemoryError 이나 ThreadDeath 같은 에러는 catch 블록으로 잡아도 대응방법이 없기에 시스템 레벨에서 특별한 작업을 하는게 아니라면, 애플리케이션에서 에러에 대한 처리는 신경쓰지 않아도 됨

2. Exception

- 애플리케이션 코드에서 예외가 발생했을 경우 사용
- CheckedException, UncheckedException 으로 구분

    <br/>
    
    1. Checked Exception

  - Exception Class의 서브클래스
  - RuntimeException Class를 상속 X
  - Transaction으로 Rollback이 진행 안됨
  - 반드시 예외체크 하는 경우 사용
  - 프로그램 상 의도한 예외가 아니기에 반드시 예외를 처리하는 코드를 함께 작성
  - 예외 처리 코드가 없다면 컴파일 에러가 발생
  - catch 문으로 잡거나 throws를 통해 메소드 밖으로 던질 수 있음.
  - Transaction: 기본적으로 Unchecked Exception이나 Error의 경우만 처리, 추가 설정을 하지 않은 경우 기본적으로 Transaction에 의한 Rollback이 되지 않음. CheckedException은 반드시 처리되야하는 예외이기에 rollback 처리가 되지 않음.

    <br/>

  2. Unchecked Exception

  - Exception Class의 서브클래스
  - RuntimeException Class를 상속 X
  - Transaction으로 Rollback이 진행 됨
  - 반드시 예외를 체크하지 않아도 되는 경우 사용
  - 명시적인 예외처리를 강제하지 않기 때문에 언체크 예외(런타임 예외)라고 부름
  - 따로 처리하지 않아도 컴파일 에러가 발생하지 않음
  - 예외를 피할 수 있지만 개발자가 부주의해서 발생할 수 있는 경우를 위해 만든 예외

    <br/>

  3. Application Exception

  - 시스템 또는 외부의 예외 상황이 원인이 아니라 애플리케이션 자체의 로직에 의해 의도적으로 예외를 발생시키고, catch 해서 무엇인가 조치를 취하도록 요구하는 예외
  - 애플리케이션 예외는 시스템 레벨 오류를 보고하는 데 사용되지 않고, 대신 비즈니스 메소드에서는 애플리케이션 예외를 사용해 클라이언트에 알림
  - 대부분의 경우 애플리케이션 예외가 발생하면 정상적인 처리로 진행하며 처리함.
  - Application Exception 처리 방법:

  <hr/>

### 다양한 예외처리 방법

- 사용 메서드 내에서 try - catch 문을 사용해서 다양한 예외를 처리하는 방법
- 요구사항에 의한 예외처리 방법
- 스프링 시큐리티의 인터셉터로 UnauthorizedException 예외처리
- 여러 처리방법이 있지만 처리를 하다보면 코드가 복잡해짐

### @ExceptionHandler

- @Controller, @RestController가 적용된 Bean내에서 발생하는 예외를 잡아서 하나의 메서드에서 처리해주는 기능

```
## 예제1

@RestController
public class TestController2{

    ...
    ...

    @ExceptionHandler(NullPointException.class)
    public Object nullException(Exception e){
        log.error(e.getClass);
        return "test";
    }

}

## 예제2
@RestController
public class TestController2{

    @ExceptionHandler(value = TestException.class)
    public String ControllerExceptionHandler(Exception e) {
        log.error(e.getMessage());
        return "404";
    }

    @GetMapping("/")
    public String test1(){
        throw new TestException("test1 error")
    }

    @GetMapping("/")
    public String test2(){
        throw new TestException("test2 error")
    }
}
```

    - @ExceptionHandler 어노테이션을 쓰고 인자로 캐치하고 싶은 예외 클래스를 등록해주면 끝.
    - @ExceptionHandler({Exception1.class,Exception2.class}) 이런식으로 두 개 이상 등록 가능

- 주의사항
- Controller, RestController에만 적용가능 (@Service 같은 빈에서 불가능)

<hr/>

### @ControllerAdvice

- 여러 Controller에서 발생하는 예외처리를 하기 위해선 @ControllerAdvice 를 사용.
- @ControllerAdvice: 모든 Controller에서 발생하는 예외처리를 할 수 있게 해주는 어노테이션, DispatcherServlet에서 발생하는 예외를 전역적으로 처리해줌.
- @RestControllerAdvice: @ControllerAdvice + @ResponseBody

- Controller의 @ExceptionHandler과 ControllerAdvice의 @ExceptionHandler중 Controller의 Exception가 우선순위가 높음

<hr/>
