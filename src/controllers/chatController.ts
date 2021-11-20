import { Request, Response } from 'express';
import fetch from 'node-fetch';
import { URL } from 'url';

export function getChat(req: Request, res: Response) {
  return res.send('chat page');
}

export async function postChat(req: Request, res: Response) {
  //TODO: s3로 입력받은 로그 저장하기
  const { speaker, contents, location } = req.body;
  // get player's serial number

  // to get user's serial -> localhost:8000/user/:id
  const url = new URL(`http://localhost:8000/user/serial/${speaker}`);
  const response = await (await fetch(url, { method: 'GET' })).json();
  const { id, playerID } = response;
  console.log(id, playerID);
  return res.end();
}
