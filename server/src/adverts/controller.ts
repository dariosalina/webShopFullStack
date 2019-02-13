import {
  JsonController,
  Post,
  HttpCode,
  Get,
  Body,
  Param,
  } from "routing-controllers";

import Adverts from "./entity";

@JsonController()
export default class AdvertsController {
  @Get("/adverts/:id")
  getAdvert(@Param("id") id: number) {
    return Adverts.findOne(id);
  }

  @Get("/home")
  async allAdverts() {
    const adverts = await Adverts.find();
    return { adverts };
  }

  @Post('/adverts')
  @HttpCode(201)
  createPage(
    @Body() advert: Adverts
  ) {
    return advert.save()
  }

}
