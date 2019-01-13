*How to Run Locally*
- Login cloud-tool use the command below 
   ```sh
   cloud-tool-fr --region us-east-1 login --username mgmt\mxxxxxx --password xxxxxx
   ```
   you can create bash file for override this command. 
   Please measure folder .aws has benn generated with credentials and config

- set up aws configure use the command below
   aws configure add access_id and access_secret_id

- use command 
   ```sh
   SET AWS_PROFILE=tr-fr-sandbox  
   ```

- use command
   ```sh  
   npm install
   ```

- To start local server run command 
  ```sh
   npm run dev
  ```