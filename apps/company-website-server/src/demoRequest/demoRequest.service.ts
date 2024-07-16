import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DemoRequestServiceBase } from "./base/demoRequest.service.base";

@Injectable()
export class DemoRequestService extends DemoRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
