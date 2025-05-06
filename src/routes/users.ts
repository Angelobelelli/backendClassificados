import {FastifyInstance} from "fastify";
import {db} from "../database";
import {z} from "zod";
import bcrypt from "bcrypt";


export async function usersRoutes(app: FastifyInstance) {


	app.get("/:id", async (request) => {
		const getUserParams = z.object({
			id: z.string().uuid(),
		});

		const {id} = getUserParams.parse(request.params);

		const user = await db("users").where("id", id).first();

		return {user};
	});

	app.post("/", async (request, replay) => {
		const createTransactionBody = z.object({
			tittle: z.string(),
			value: z.number(),
			type: z.enum(["credit", "debit"]),
		});

		const {tittle, value, type} = createTransactionBody.parse(request.body);

		await db("transations").insert({
			id: crypto.randomUUID(),
			tittle,
			value: type === "credit" ? value : value * -1,
		});

		return replay.status(201).send();
	});

	app.post("/login", async (request, replay) => {
		const createTransactionBody = z.object({
			email: z.string().email(),
			password: z.string().min(6),
		});

		const {email, password} = createTransactionBody.parse(request.body);

		const user = await db("users").where("email", email).first();

		if (!user) {
			return replay.status(401).send({message: "User not found"});
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.senha);
		if (!isPasswordCorrect) {
			return replay.status(401).send({message: "Invalid password"});
		}

		return replay.status(200).send({user});
	});
}
