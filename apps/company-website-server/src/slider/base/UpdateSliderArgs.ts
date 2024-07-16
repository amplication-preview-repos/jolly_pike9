/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SliderWhereUniqueInput } from "./SliderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SliderUpdateInput } from "./SliderUpdateInput";

@ArgsType()
class UpdateSliderArgs {
  @ApiProperty({
    required: true,
    type: () => SliderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SliderWhereUniqueInput)
  @Field(() => SliderWhereUniqueInput, { nullable: false })
  where!: SliderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SliderUpdateInput,
  })
  @ValidateNested()
  @Type(() => SliderUpdateInput)
  @Field(() => SliderUpdateInput, { nullable: false })
  data!: SliderUpdateInput;
}

export { UpdateSliderArgs as UpdateSliderArgs };
