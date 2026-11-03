# Build stage
FROM eclipse-temurin:25-jdk-alpine AS build
WORKDIR /app

# Copy from host to container
COPY . .
RUN chmod +x gradlew
RUN ./gradlew bootJar -x test

# Production stage
FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 5212
ENTRYPOINT ["java", "-jar", "app.jar"]