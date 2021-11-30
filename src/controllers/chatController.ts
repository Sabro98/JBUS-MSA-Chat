import { Request, Response } from 'express';
import { Chats } from '../models/chats';

export function getChat(req: Request, res: Response) {
  return res.send('chat page');
}

export async function postChat(req: Request, res: Response) {
  const { speaker, contents, location } = req.body;
  console.log(speaker, contents, location);
  try {
    await Chats.create({
      speaker,
      contents,
      location,
    });
  } catch (err) {
    return res.status(400).send(err);
  }
  return res.status(200).end();
}

export async function getSearch(req: Request, res: Response) {
  const { id } = req.params;
  if (!id) return res.end();
  console.log(id);
  const result = await Chats.findAll({
    where: {
      speaker: id,
    },
  });
  const chats: {
    speaker: string;
    contents: string;
    location: string;
  }[] = [];

  result.map((chat) => {
    chats.push({
      speaker: chat.speaker,
      contents: chat.contents,
      location: chat.location,
    });
  });

  return res.json(JSON.stringify(chats));
}
