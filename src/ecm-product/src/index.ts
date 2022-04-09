import * as express from 'express';
import { ArrayUtils } from '@micro-ecm/utils';
const app = express();

app.listen(3000, () => {
  console.log(ArrayUtils.isPresent([1, 2, 3]));
  console.log('Server is running on port 3000');
});