import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  aws_table_name: process.env.AWS_TABLE_NAME,
  aws_remote_config: {
    region: 'ap-northeast-2',
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
};
