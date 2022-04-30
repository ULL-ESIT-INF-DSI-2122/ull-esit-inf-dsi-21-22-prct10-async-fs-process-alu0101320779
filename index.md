---
title: "Práctica 10"
---

> Desarrollo en Sistemas Informáticos
> ------
# Ejercicio 1:
>-----------------------

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