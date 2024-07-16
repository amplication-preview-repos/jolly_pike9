import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DemoRequestService } from "./demoRequest.service";
import { DemoRequestControllerBase } from "./base/demoRequest.controller.base";

@swagger.ApiTags("demoRequests")
@common.Controller("demoRequests")
export class DemoRequestController extends DemoRequestControllerBase {
  constructor(
    protected readonly service: DemoRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
