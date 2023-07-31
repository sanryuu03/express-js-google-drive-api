This is a [express.js](https://expressjs.com/).

# Penggunaan

- build

      docker compose build

- create

      docker compose create

- start

      docker compose start

- one line => Builds, (re)creates, starts, and attaches to containers for a service.

      docker compose up
      docker compose up -d => --detach , -d		Detached mode: Run containers in the background

- cek image

      docker image ls
      atau menggunakan group
      docker image ls | grep nama => docker image ls | grep express-js

- cek container

      docker container ls -a
      atau
      docker compose ps

- stop

      docker compose down

- hapus image

      docker image rm IMAGE ID

- masuk ke dalam container

      docker exec -i -t express-js-google-drive-api /bin/bash

- list file

      ls -al

# Referensi

- upload and delete single file : [click here](https://gist.github.com/trulymittal/fd9c4bfd1f22fb9c62847a351dcbf0a5)
- upload multiple files : [click here](https://github.com/dennisiluma/googleDriveFilesUploadNode/blob/master/index.js)
