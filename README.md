# Introduction

In this repository there is an hello world kata ( aka exercise ) for both Frontend and Backend developer ( see below for example stack ).
In order to work with this repository, just fork it and implement both Frontend and Backend.

## Goal

Goal for this project is to provide following features for the user:

- user must access frontend using browser
- user should insert two parameters, integer values
- user should be able to send these two parameters to the backend and see result
- backend must validate two parameters as integers
- backend will answer to the user with the sum of the two parameters
- user should be able to reset two parameters and result and start again

# Prerequisite

This kata need has following software dependencies, please install them:

## Backend

 - Gradle 6.2.2
 - Java 11.x

## Frontend

 - Angular 12.x

# Architecture

## Backend

Backend must provide a set of REST services using spring boot and java 11, with all dependencies managed by Gradle. There is no database for this services and no autentication is required.

## Frontend

Frontend must provide at least one page where user can interact.

# Ide

## Backend

 - You can use any ide for simple compile, test and run. My suggestion is to run from Eclipse, download it from here: https://www.eclipse.org/downloads/packages/

## Frontend

 - My suggestion is to use Visual Studio Code, download from here: https://code.visualstudio.com/

# Test

## Backend

Backend must be testable with at least 1 junit test of any implemented classes. To run the test, just run from the cli :

  gradlew clean build test
  
All tests must be passed ( no errors! ).

## Frontend

Unit test is not required for Frontend, but application must be used from Chrome and Firefox.

# Running

## Backend

When runned the backend services must respond on http://localhost:8080/

## Frontend

When runned the frontend services must respond on http://localhost:4200/
