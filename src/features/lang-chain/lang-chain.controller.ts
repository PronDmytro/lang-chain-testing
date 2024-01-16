import { BadRequestException, Controller, Get, InternalServerErrorException, Query } from '@nestjs/common';
import { LangChainService } from './lang-chain.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('lang-chain')
@ApiTags('Lang chain controller')
export class LangChainController {

  constructor(
    private readonly _langChainService: LangChainService,
  ) {
  }

  @Get('process-text')
  public processText(@Query('inputText') inputText: string): string {
    if (!inputText) {
      throw new BadRequestException('No input text provided');
    }

    try {
      return this._langChainService.processText(inputText);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

}
