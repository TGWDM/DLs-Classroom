# SDK is need to compile the project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
# working directory for the backend of the project
WORKDIR /src 

# Copy the project file and restore dependencies
COPY *.csproj .
RUN dotnet restore

# Copy source and publish
COPY dlClass.API/. .
RUN dotnet publish -c Release -o /app/publish

# Runtime stage - smaller image without compilers
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copy compiled output from build stage
COPY --from=build /app/publish .

EXPOSE 8080
ENTRYPOINT ["dotnet", "dlClass.API.dll"]