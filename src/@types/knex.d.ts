

import {Knex} from "knex";

declare module "knex/types/tables" {
	export interface Tables {
		users: {
			id: number;
			nome: string;
			image: string | null;
			email: string;
			senha: string;
			whatsapp: string | null;
			telefone: string | null;
			cpf: string | null;
			logo: string | null;
			descricao: string | null;
			cep: string | null;
			logradouro: string | null;
			complemento: string | null;
			bairro: string | null;
			localidade: string | null;
			uf: string | null;
			numero: string | null;
		};
		categories: {
			id: number;
			nome: string;
		};
		products: {
			id: number;
			nome: string;
			image: string | null;
			preco: number;
			descricao: string;
			data_anuncio: Date;
			usuario_id: number;
			categoria_id: number;
		};
		product_images: {
			id: number;
			produto_id: number;
			url: string;
		};
	}
}
