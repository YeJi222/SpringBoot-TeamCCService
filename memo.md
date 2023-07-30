## 빌드 관리 도구 Maven vs. Gradle
## Maven
- pom.xml

## Gradle
- build.gradle

Gradle - Groovy : Groovy가 java와 비슷   
- Groovy는 Java 가상 머신에서 실행되는 스크립트 언어
- Java 가상 머신에서 동작하지만, Java와는 달리 소스 코드를 컴파일 할 필요는 없다.
- Groovy는 스크립트 언어이고, 소스 코드를 그대로 실행
- Java와 호환되고, Java 클래스 파일을 그대로 Groovy 클래스로 사용할 수 있다.
- Java 문법과 유사하여 빌드 처리를 관리할 수 있다.
출처 : https://dev-coco.tistory.com/65

<img width="820" alt="image" src="https://github.com/YeJi222/Ver2.0/assets/70511859/0e030e74-b1ca-4d50-9872-04ca01840eff">

## Trouble Shooting
[IntelliJ 실행 오류가 보이지 않을 때]    
- Preferences -> Build, Execution, Deployment -> Gradle -> Build and run using과 Run tests using 모두 IntelliJ IDEA로 변경
<img width="546" alt="image" src="https://github.com/YeJi222/Ver2.0/assets/70511859/c9d36086-8c49-4ce6-bd0d-236eccaab516">

[자주하는 어노테이션 실수...]
Description:   
Parameter 0 of constructor in com.service.teamcc.data.handler.Impl.ActivityHandlerImpl required a bean of type 'com.service.teamcc.data.dao.ActivityDAO' that could not be found.   
Action:   
Consider defining a bean of type 'com.service.teamcc.data.dao.ActivityDAO' in your configuration.   
=> ActivityDAOImpl.javva 파일에 @Service 어노테이션 빠져서 생긴 에러

