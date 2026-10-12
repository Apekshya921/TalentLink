import express from 'express';
import {
  postJob,
  findAllJobs,
  findJob,
  updateJob,
  deleteJob
} from '../controller/job.js';

const job = express.Router();

job.post('', postJob);
job.get('/', findAllJobs);
job.get('/:id', findJob);
job.patch('/:id', updateJob);
job.delete('/:id', deleteJob);

export default job;
