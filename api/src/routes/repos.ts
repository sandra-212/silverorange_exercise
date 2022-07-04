import { Router, Request, Response } from 'express';
import fileRepos from '../../data/repos.json';
const axios = require('axios');

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  axios
    .get(' https://api.github.com/users/silverorange/repos')
    .then(function (response: any) {
      // handle success
      let remoteRepos = response.data;
      let repos = [...fileRepos, ...remoteRepos].filter(
        (repo: any) => repo.fork === false
      );
      res.json(repos);
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
    });
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
});
