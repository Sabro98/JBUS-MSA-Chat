import { Request, Response } from 'express';
import fetch from 'node-fetch';
import { URL } from 'url';
import { docClient } from '../db';
import { DynamoDB } from 'aws-sdk';

export function getChat(req: Request, res: Response) {
  return res.send('chat page');
}

export async function postChat(req: Request, res: Response) {
  //TODO: s3로 입력받은 로그 저장하기
  const { speaker, contents, location } = req.body;
  // get player's serial number

  // to get user's serial -> localhost:8000/user/:id
  const url = new URL(
    `http://DemoALB-1573559176.ap-northeast-2.elb.amazonaws.com:8000/user/serial/${speaker}`
  );
  const response = await (await fetch(url, { method: 'GET' })).json();
  const { playerID, playerNickName } = response;

  const params: DynamoDB.DocumentClient.PutItemInput = {
    TableName: process.env.AWS_TABLE_NAME || 'your table',
    Item: {
      speaker: playerID,
      playerNickName,
      contents,
      location,
    },
  };

  docClient.put(params, (err, data) => {
    if (err) {
      return res.status(405).send();
    } else {
      return res.status(200).send('Success');
    }
  });
}
