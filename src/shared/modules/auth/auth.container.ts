import { Container } from 'inversify';
import { AuthService } from './auth-service.interface.js';
import { Component } from '../../types/index.js';
import { ExceptionFilter } from '../../../rest/libs/index.js';
import { AuthExceptionFilter } from './auth.exception-filter.js';
import { DefaultAuthService } from './default-auth.service.js';

export function createAuthContainer() {
  const container = new Container();

  container
    .bind<AuthService>(Component.AuthService)
    .to(DefaultAuthService)
    .inSingletonScope();

  container
    .bind<ExceptionFilter>(Component.AuthExceptionFilter)
    .to(AuthExceptionFilter)
    .inSingletonScope();

  return container;
}
