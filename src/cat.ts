import {spawn} from 'child_process';

export class cat{
    constructor(name: string){}

    cat_command(): void{
        const command = spawn('cat', [this.name]);
        command.stdout.pipe()
    }
}