import { Router, Request, Response } from 'express';
import fileRepos from '../../data/repos.json';
import axios from 'axios';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  axios
    .get(' https://api.github.com/users/silverorange/repos')
    .then(function (response: any) {
      // handle success
      const remoteRepos = response.data;
      const allRepos = [...fileRepos, ...remoteRepos].filter(
        (repo: any) => repo.fork === false
      );
      res.json(allRepos);
    })
    .catch(function (error: any) {
      res.send(error);
    });
});
