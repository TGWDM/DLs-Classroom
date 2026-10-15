# DLs-Classroom

[![CI](https://github.com/TGWDM/DLs-Classroom/actions/workflows/ci.yml/badge.svg)](https://github.com/TGWDM/DLs-Classroom/actions/workflows/ci.yml)

## Overview 
GUI classroom app where students have avatars and can be assigned points of XP. Teachers can select different views where the XP and ranks of the students are displayed on a bar chart (WIP).

## Teck Stack
Database: Postgres

Backend: Java
> **Backend migration:** Originally built with C# (ASP.NET Core), now rebuilt in 
> Java (Spring Boot) as part of a deliberate move toward enterprise backend 
> development. The C# implementation remains available on the `csharp-backend` branch.

Frontend:
- Typescript
- Vite
- Electron (Desktop Wrapper)

Testing:
- vitest
- XUnit 
- CI/CD
- Dependabot

## Features
Students can customize their own icons, to personalise themselves in the application. 