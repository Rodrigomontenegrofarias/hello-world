FROM node:buster

# Create app directory
WORKDIR .
RUN npm install > /dev/null

EXPOSE 3000
CMD ["npm","start"]
