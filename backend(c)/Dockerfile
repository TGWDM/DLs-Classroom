# SDK is needed to compile the project
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Copy the project file from the subfolder
COPY dlClass.API/*.csproj ./dlClass.API/
WORKDIR /src/dlClass.API
RUN dotnet restore

# Copy source and publish
COPY dlClass.API/. .
RUN dotnet publish -c Release -o /app/publish

# Runtime stage - use matching version
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app

# Copy compiled output from build stage
COPY --from=build /app/publish .

EXPOSE 5212
ENTRYPOINT ["dotnet", "dlClass.API.dll"]