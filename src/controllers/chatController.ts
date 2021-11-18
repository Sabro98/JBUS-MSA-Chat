import { Request, Response } from 'express';

export function getChat(req: Request, res: Response) {
  return res.send('chat page');
}

export function postChat(req: Request, res: Response) {
  //TODO: s3로 입력받은 로그 저장하기
  return res.end();
}
