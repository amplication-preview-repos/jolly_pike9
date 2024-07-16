import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DemoRequestResolverBase } from "./base/demoRequest.resolver.base";
import { DemoRequest } from "./base/DemoRequest";
import { DemoRequestService } from "./demoRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DemoRequest)
export class DemoRequestResolver extends DemoRequestResolverBase {
  constructor(
    protected readonly service: DemoRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
