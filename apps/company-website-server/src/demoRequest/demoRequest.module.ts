import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DemoRequestModuleBase } from "./base/demoRequest.module.base";
import { DemoRequestService } from "./demoRequest.service";
import { DemoRequestController } from "./demoRequest.controller";
import { DemoRequestResolver } from "./demoRequest.resolver";

@Module({
  imports: [DemoRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [DemoRequestController],
  providers: [DemoRequestService, DemoRequestResolver],
  exports: [DemoRequestService],
})
export class DemoRequestModule {}
