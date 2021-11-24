import * as AWS from 'aws-sdk';
import { config } from './config/config';

AWS.config.update(config.aws_remote_config);
export const docClient = new AWS.DynamoDB.DocumentClient();
