import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SliderModuleBase } from "./base/slider.module.base";
import { SliderService } from "./slider.service";
import { SliderController } from "./slider.controller";
import { SliderResolver } from "./slider.resolver";

@Module({
  imports: [SliderModuleBase, forwardRef(() => AuthModule)],
  controllers: [SliderController],
  providers: [SliderService, SliderResolver],
  exports: [SliderService],
})
export class SliderModule {}
