#!/bin/bash

rsync -avzhP --delete ~/Developer/bettermode/interview-task/ root@82.102.10.111:~/bettermode/interview-task

#ssh root@82.102.10.111 'cd ~/bettermode/interview-task/deploy-files; docker compose down; docker compose up -d; docker compose logs;'