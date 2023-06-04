import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {
  BearerStrategy,
  IBearerStrategyOption,
  ITokenPayload,
  VerifyCallback,
} from 'passport-azure-ad';

@Injectable()
export class AzureStrategy extends PassportStrategy(BearerStrategy, 'azure') {
  constructor() {
    super({
      identityMetadata: `https://login.microsoftonline.com/${process.env.NX_API_AZURE_TENANT_ID}/v2.0/.well-known/openid-configuration`,
      clientID: process.env.NX_API_AZURE_CLIENT_ID,
      validateIssuer: true,
      issuer: `https://login.microsoftonline.com/${process.env.NX_API_AZURE_TENANT_ID}/v2.0`,
      audience: process.env.NX_API_AZURE_CLIENT_ID,
      loggingLevel: 'info',
      passReqToCallback: false,
      loggingNoPII: false,
    } as IBearerStrategyOption);
  }

  async validate(token: ITokenPayload, done: VerifyCallback): Promise<any> {
    if (!token.oid) {
      done(new UnauthorizedException('No oid found in access token'), false);
    }
    done(null, token);
  }
}
