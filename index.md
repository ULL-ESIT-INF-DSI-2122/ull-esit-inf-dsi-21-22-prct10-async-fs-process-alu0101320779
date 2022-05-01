---
title: "Práctica 10"
---

> Desarrollo en Sistemas Informáticos

# Ejercicio 1:

En este primer ejercicio lo que hago es ejecutar el siguiente código:

```typescript
    import {access, constants, watch} from 'fs';

    if (process.argv.length !== 3) {
    console.log('Please, specify a file');
    } else {
    const filename = process.argv[2];

    access(filename, constants.F_OK, (err) => {
        if (err) {
        console.log(`File ${filename} does not exist`);
        } else {
        console.log(`Starting to watch file ${filename}`);

        const watcher = watch(process.argv[2]);

        watcher.on('change', () => {
            console.log(`File ${filename} has been modified somehow`);
        });

        console.log(`File ${filename} is no longer watched`);
        }
    });
    }
```
Para comprobar y entender el funcionamiento del mismo.
Al ejecutar el código hago unas cuántas pruebas:
- Después de ejecutar el código sin pasarle por línea de comando ningún archivo para que leyera, lo que hace es pedirme un fichero
```shell 
 11:59:30 AM - Found 0 errors. Watching for file changes.
[~/ull-esit-inf-dsi-21-22-prct10-async-fs-process-alu0101320779(main)]$node dist/index.js 
Please, specify a file
```
- Después de especificarle un fichero para la lectura lo que muestra el fichero es lo siguiente:
```shell
[~/ull-esit-inf-dsi-21-22-prct10-async-fs-process-alu0101320779(main)]$node dist/index.js helloworld.txt
File helloworld.txt does not exist
```
Ya que no he creado ningún fichero y el código no crea ningún fichero en el caso de que no exista.

- La siguiente prueba que hago es crear el fichero y pasarlo por línea de comando.
```shell
[~/ull-esit-inf-dsi-21-22-prct10-async-fs-process-alu0101320779(main)]$node dist/index.js helloworld.txt
Starting to watch file helloworld.txt
File helloworld.txt is no longer watched
File helloworld.txt has been modified somehow
```
Y me muestra que esta observando los cambios del fichero, y que no se han observado cambios en el fichero.

- Después de esta prueba lo que hago es modificarlo, me muestra por pantalla que se hicieron cambios.
- Finalmente la última prueba que hago es eliminar el fichero mientras se están observando cambios, lo que hace el código es mostrarme por pantalla que se hicieron cambios.

La traza de esta ejecución sería, en primer lugar se mandan las funciones al call stack y se sacarán de ahí cuando devuelvan un valor, en este caso se comprueba si se ha introducido correctamente el fichero, después se comprueba si se puede abrir el fichero y en el caso de que no se pueda manda un error, después de comprobar eso y de que haya pasado todo por el call stack, se manda a `watcher` a la web API a la espera de que el fichero sea modificado, en el caso de que se modifique se manda a la cola y es ejecutado.
- Lo que hacen las funciones `access` y `constants` es acceder al fichero indicado y comprobar los permisos del fichero respectivamente, para ver si se puede llevar a cabo la lectura y escritura del mismo.

# Ejercicio 2


