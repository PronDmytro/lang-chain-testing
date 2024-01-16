# LangChainTesting
This application utilises a Nest.js project with an endpoint `/text/process-text`. This endpoint mimics a simplified 
version of LangChain by leveraging a rudimentary keyword matching mechanism to articulate pre-defined responses.

## Application Logic

The logic of this application is straightforward:

1. The application receives text data sent by a user.
2. This text data is processed with a simple keyword matching algorithm, which looks for specific keywords in the input 
text to determine which predetermined response to return.

## LangChain Integration

[LangChain](https://www.langchain.com/), a service which utilises technologies such as AI, Machine Learning, and 
blockchain for text analysis and language translation purposes, could provide a valuable enhancement to this application.
It can be integrated to improve the accuracy and effort the `/text/process-text` endpoint puts into
analyzing a user's input text. If be more precisely in method `processText` of service `LangChainService`

Exact integration points would depend on specific project requirements, but potential uses could include:

- **Contextual Understanding:** LangChain's AI capabilities could be used to deeply understand the context of user 
input. This goes beyond simple keyword matching to comprehend the meaning behind user's input, even with complex and nuanced text.

- **Response Generation:** Coupled with contextual understanding, LangChain can also generate responses. Not just 
rote, pre-defined ones but responses that are contextually rich and personalised to the user's input.

- **Language Translation:** One of the key features of LangChain, the ability to translate text from one language to 
another. This feature could be integrated into the application to support users of multiple languages.

## Prerequisites:
- terminal: git bash / wsl2
- installed [nvm](https://github.com/nvm-sh/nvm) ([for windows](https://github.com/coreybutler/nvm-windows))
- docker

## Installation
```bash
./nvm-use.sh #for linux just nvm use
```
```bash
npm install yarn -g
```
```bash
corepack enable
```
```bash
yarn install
```
```bash
yarn run copy:env-file-from-example
```

## Start
```bash
yarn run start:dev
```

## Api-Documentation
See swagger on localhost by default via https://localhost:3000/docs/
