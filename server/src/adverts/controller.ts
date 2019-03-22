import {
  JsonController,
  Post,
  HttpCode,
  Get,
  Body,
  Param
} from "routing-controllers";

import Advert from "./entity";

@JsonController()
export default class AdvertsController {
  @Get("/adverts/:id")
  getAdvert(@Param("id") id: number) {
    return Advert.findOne(id);
  }

  @Get("/adverts")
  async allAdverts() {
    const adverts = await Advert.find();
    return { adverts };
  }

  @Post("/adverts")
  @HttpCode(201)
  createPage(@Body() advert: Advert) {
    return advert.save();
  }
}
