import { Injectable } from '@nestjs/common';
import { RESPONSES } from './constants/responses.constant';

@Injectable()
export class LangChainService {

  public processText(inputText: string): string {
    for (const { keywords, response } of RESPONSES) {
      if (keywords.some((keyword) => inputText.toLowerCase().includes(keyword))) {
        return response;
      }
    }

    return 'Sorry, I did not understand that.';
  }

}
