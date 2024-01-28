#!/usr/bin/env bash

read -p "Enter migration message: " msg
docker-compose exec web bash -c "npx prisma migrate dev --name "$msg""
