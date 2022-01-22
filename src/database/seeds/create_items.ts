import {Knex} from 'knex';

export async function seed(knex: Knex){
    await knex('items').insert([
        { title: "Papeis", image: "papel.png"},
        { title: "Vidro", image: "vidro.png"},
        { title: "Oleo", image: "oleo.png"},
        { title: "Eletronico", image: "eletronico.png"}
    ]);
}